import Image from 'next/image';
import { useContext } from 'react';
import Social from '../../Components/Social';
import wallet from '../../public/wallet.svg';
import { TransactionContext } from '../../store/TransactionContext';

export default function metaMask() {
  const { connectWallet } = useContext(TransactionContext);

  return (
    <div className="mb-20">
      <div className="flex flex-col w-56 align-middle justify-center mx-auto mt-20  relative">
        <div className="bg-[#A8D594] rounded-full p-3 h-20 w-20 flex justify-center align-middle mx-auto">
          <Image
            src={wallet}
            alt="wallet image"
            width="40"
            height="40"
            className="mx-auto"
          />
        </div>

        <h2 className="font-medium text-2xl text-center mt-6">
          Connect Your Wallet
        </h2>

        <div
          onClick={connectWallet}
          className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-10 rounded-xl mt-6 cursor-pointer hover:text-white hover:bg-black transition duration-700 ease-in-out"
        >
          <Image
            src="/metamask-image.png"
            alt="wallet image"
            width="100"
            height="100"
            className="mx-auto"
          />
          <h2 className="text-center text-lg">MetaMask</h2>
        </div>
      </div>

      <Social />
    </div>
  );
}
