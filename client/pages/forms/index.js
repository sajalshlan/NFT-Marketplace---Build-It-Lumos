import Image from 'next/image';
import Social from 'G:/NFT MarketPlace Project Hackathon/NFT-Marketplace---Build-It-Lumos/client/Components/Social.jsx';

export default function form() {
  return (
    <div>
      <div className="flex justify-between py-4 lg:px-60 md:px-20 sm:px-10  text-2xl">
        <a className="font-medium" href="">
          AssHub
        </a>

        <div className="flex justify-between text-gray-500 ">
          <a className="px-3" href="">
            Sell Digital Art
          </a>
          <a className="px-3" href="">
            Buy Digital Art
          </a>
        </div>
      </div>

      <div className="block md:flex lg:flex sm:flex xs:block justify-between   lg:px-60 md:px-20 sm:px-10 xs:p-5 py-16 container mx-auto ">
        <form className="text-black w-80 mb-10">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            for="assetName"
          >
            AssetName
          </label>
          <input
            className="shadow appearance-none  rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            border-2 border-gray-300  mb-8"
            id="assetName"
            type="text"
            placeholder="The Ape NFT"
          ></input>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            for="assetDiscription"
          >
            Asset Discription
          </label>
          <textarea
            className="shadow appearance-none  rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            border-2 border-gray-300 mb-8"
            id="assetDiscription"
            placeholder="The Latest NFT using Opensea"
          ></textarea>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            for="assetPrice"
          >
            AssetPrice
          </label>
          <input
            className="shadow appearance-none  rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            border-2 border-gray-300  mb-8"
            id="assetPrice"
            type="number"
            placeholder="Enter the price in ETH"
          ></input>

          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            for="default_size"
          >
            Upload NFT
          </label>
          <input
            class="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:placeholder-gray-400 p-2"
            id="default_size"
            type="file"
          ></input>

          <button
            type="button"
            className="mt-2 w-full inline-block px-6 py-2.5 bg-black text-white font-medium leading-normal  shadow-md hover:bg-white 
            text-lg  hover:border-2 hover:border-black  hover:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out rounded-2xl"
          >
            Create Digital Art
          </button>
        </form>

        <div className="flex flex-col shadow-md px-6 rounded-3xl">
          <h2 className="uppercase text-black font-medium text-sm mt-4 text-center">
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
          mt-8 mx-auto p-4"
          />

          <Social />
        </div>
      </div>
    </div>
  );
}
