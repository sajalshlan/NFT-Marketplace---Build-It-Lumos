import React, { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { nftAddress, nftMarketAddress } from '../../smart contract/config';
import NFT from '../../smart contract/artifacts/contracts/NFT.sol/NFT.json';
import NFTMarket from '../../smart contract/artifacts/contracts/NFTMarket.sol/NFTMarket.json';
import axios from 'axios';

export const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  const [NFTs, setNFTs] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const nftTokenContract = new ethers.Contract(nftAddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftMarketAddress,
      NFTMarket.abi,
      provider
    );
    const data = await marketContract.fetchMarketItems();

    const itemsArr = await Promise.all(
      data.map(async element => {
        const tokenURI = await nftTokenContract.tokenURI(element.tokenId);
        const meta = await axios.get(tokenURI);
        let price = ethers.utils.formatUnits(element.price.toString(), 'ether');

        let item = {
          price,
          tokenId: element.tokenId.toNumber(),
          seller: element.seller,
          owner: element.owner,
          img: meta.data.image,
          title: meta.data.name,
        };

        return item;
      })
    );

    setNFTs(itemsArr);
  };

  const buyNfts = async nft => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftMarketAddress,
      NFTMarket.abi,
      signer
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
    const transaction = await contract.createMarketSale(
      nftAddress,
      nft.tokenId,
      {
        value: price,
      }
    );

    await transaction.wait();
    loadNFTs();
  };

  // connect Wallet fn
  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    await web3Modal.connect();
  };

  return (
    <TransactionContext.Provider
      value={{ connectWallet, buyNfts, loadNFTs, NFTs }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
