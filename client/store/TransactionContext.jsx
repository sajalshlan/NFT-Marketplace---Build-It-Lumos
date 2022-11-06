import React, { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

export const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  //   const [currentAccount, setCurrentAccount] = useState();

  //   // check if wallet is connected
  //   const checkWalletIsConnected = async () => {
  //     try {
  //       if (!ethereum) alert('Please install Metamask!! 😕');

  //       const accounts = await ethereum.request({
  //         method: 'eth_accounts',
  //       });

  //       if (accounts.length) {
  //         setCurrentAccount(accounts[0]);
  //       } else {
  //         console.log('No accounts found!!');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       throw new Error('No ethereum object!');
  //     }
  //   };

  // connect Wallet fn
  const connectWallet = async () => {
    // try {
    //   if (!ethereum) return alert('Please install Metamask!! 😕');

    //   const accounts = await ethereum.request({
    //     method: 'eth_requestAccounts',
    //   });

    //   setCurrentAccount(accounts[0]);
    // } catch (error) {
    //   console.error(error.message);
    //   throw new Error('No ethereum object found!!');
    // }

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
  };

  //   useEffect(() => {
  //     checkWalletIsConnected();
  //   }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
