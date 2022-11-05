import Image from "next/image";
import Social from "G:/NFT MarketPlace Project Hackathon/NFT-Marketplace---Build-It-Lumos/client/Components/Social.jsx";

export default function metaMask() {
  return (
    <div>
      <div className="flex justify-between sm:px-10 lg:px-20 xl:px-40 py-5">
        <a className="font-bold text-xl" href="">
          AssHub
        </a>
        <a
          className="border-2 rounded-xl  px-4 py-1 border-gray-700 bg-gray-300 "
          href=""
        >
          Upload Now
        </a>
      </div>

      <div className="flex flex-col w-56 align-middle justify-center mx-auto mt-28 relative">
        <div className="bg-[#A8D594] rounded-full p-3 w-16 h-16 flex justify-center align-middle mx-auto">
          <Image
            src="/wallet-vector.png"
            alt="wallet image"
            width="15"
            height="15"
            className="mx-auto"
          />
        </div>

        <h2 className="font-medium text-2xl text-center mt-6">
          Connect Your Wallet
        </h2>

        <div className="shadow p-10 rounded-xl mt-6 hover:text-white hover:bg-black transition duration-1000 ease-in-out">
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