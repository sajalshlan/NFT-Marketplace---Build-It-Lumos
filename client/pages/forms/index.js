import Image from 'next/image';
import Social from '../../Components/Social';

export default function form() {
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
            className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:placeholder-gray-400 p-2"
            id="default_size"
            type="file"
          ></input>

          <button
            type="button"
            className="mt-2 w-full inline-block px-6 py-2.5 bg-black text-white font-medium leading-normal  shadow-md hover:bg-white 
            text-lg  hover:border-2 hover:border-black  hover:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:text-white active:shadow-lg transition duration-150 ease-in-out rounded-2xl"
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
