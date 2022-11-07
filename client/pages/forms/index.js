import Image from 'next/image';
import Social from '../../Components/Social';
import { create } from 'ipfs-http-client';
import Web3Modal from 'web3modal';
import { nftAddress, nftMarketAddress } from '../../../smart contract/config';
import NFT from '../../../smart contract/artifacts/contracts/NFT.sol/NFT.json';
import NFTMarket from '../../../smart contract/artifacts/contracts/NFTMarket.sol/NFTMarket.json';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import { Buffer } from 'buffer';

const projectId = '2HE3FXWwI86Hc8Gcf1uzTHl5PQQ';
const projectSecret = 'a699e3904277a8babc6fe45310a7abc7';

const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

export default function form() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: '',
    name: '',
    description: '',
  });

  const router = useRouter();

  const onChange = async event => {
    const file = event.target.files[0];
    try {
      const added = await client.add(file, {
        progress: progress => console.log(`recieved: ${progress}`),
      });

      const url = `https://nft-market-place-asshub.infura-ipfs.io/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  const createItem = async () => {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;

    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });

    try {
      const added = await client.add(data);
      const url = `https://nft-market-place-asshub.infura-ipfs.io/${added.path}`;
      createSale(url);
    } catch (error) {
      console.log('Error Uploading file: ', error);
    }
  };

  const createSale = async url => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const providers = new ethers.providers.Web3Provider(connection);
    const signer = providers.getSigner();

    let contract = new ethers.Contract(nftAddress, NFT.abi, signer);
    let transaction = await contract.createToken(url);
    let tx = await transaction.wait();

    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();

    const price = ethers.utils.parseUnits(formInput.price, 'ether');

    contract = new ethers.Contract(nftMarketAddress, NFTMarket.abi, signer);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.createMarketItem(nftAddress, tokenId, price, {
      value: listingPrice,
    });

    await transaction.wait();
    router.push('/');
  };

  return (
    <>
      <div className="flex justify-between mx-auto lg:px-60 md:px-20 sm:px-10 py-16">
        <form className="text-black w-[50%]  ">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="assetName"
          >
            Asset Name
          </label>
          <input
            onChange={event =>
              updateFormInput({ ...formInput, name: event.target.value })
            }
            className="shadow appearance-none  rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            border-2 border-gray-300  mb-5"
            id="assetName"
            type="text"
            placeholder="The Ape NFT"
          ></input>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="assetDiscription"
          >
            Asset Description
          </label>
          <textarea
            onChange={event =>
              updateFormInput({ ...formInput, description: event.target.value })
            }
            className="shadow appearance-none h-36 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            border-2 border-gray-300 mb-5"
            id="assetDiscription"
            placeholder="The Latest NFT using Opensea"
          ></textarea>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="assetPrice"
          >
            Asset Price
          </label>
          <input
            onChange={event =>
              updateFormInput({ ...formInput, price: event.target.value })
            }
            className="shadow appearance-none  rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            border-2 border-gray-300  mb-5"
            id="assetPrice"
            type="number"
            placeholder="Enter the price in ETH"
          ></input>

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            htmlFor="default_size"
          >
            Upload NFT
          </label>
          <input
            onChange={onChange}
            className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:placeholder-gray-400 p-2"
            id="default_size"
            type="file"
          ></input>
          {fileUrl && (
            <img className="rounded-lg mt-5" width={350} src={fileUrl} />
          )}
          <button
            onClick={createItem}
            type="button"
            className="mt-2 w-full inline-block px-6 py-2.5 bg-black text-white font-medium leading-normal  shadow-md hover:bg-white 
            text-lg  hover:border-2 hover:border-black  hover:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out rounded-2xl"
          >
            Create Digital Art
          </button>
        </form>

        <div className="flex flex-col shadow-2xl rounded-md px-6 w-[40%] py-10 h-full items-center ">
          <h2 className="uppercase text-black font-medium text-sm  text-center">
            ARE YOU READY ?
          </h2>
          <p className="text-gray-400 text-center mt-4">
            FLY TO THE MOON WITH NFTS
          </p>
          <Image
            src="/panda.png"
            alt="panda"
            width="200"
            height="200"
            className="
          mt-8"
          />

          <Social />
        </div>
      </div>
    </>
  );
}
