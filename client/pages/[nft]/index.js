import Image from 'next/image';
import Social from '../../Components/Social';

export default function nft() {
  return (
    <>
      <div className="flex justify-around items-center">
        <div className="border-4 rounded-2xl border-red-800 w-72 h-wrap text-center">
          <h2 className="text-center mt-4 text-3xl">Apes the OG</h2>
          <Image
            src="/bandar.png"
            alt="nft.png"
            width="170"
            height="150"
            className="
          mx-auto mt-10"
          />
          <button className="mt-12 mb-0 border-4 rounded-xl px-8 py-2 text-lg">
            BUY NOW
          </button>
          <Social />
        </div>

        <div className=" w-7/12 h-min">
          <h1 className="mb-8 text-4xl">Apes the OG</h1>
          <p className="w-9/12 border-2 border-red-800 text-xl mb-8">
            This is the ape, I use to call it the bandar NFT But turned out the
            people use to call hi Ape, Haha, Meanwhile jo bhi bolo sala rahega
            to chutiya bandar hi.
          </p>
          <p className="text-xl mb-12">
            Current Price: <span>40 ETH</span>
          </p>

          <h2 className="text-2xl mb-4">Activity</h2>

          <div>
            <div className="flex gap-8 justify-around items-center border-2 border-gray-200 rounded-lg">
              <span>1.</span>
              <p>Aman</p>
              <p>0xzR...4sa</p>
              <p>Ethereum</p>
              <p>$2,893.55</p>
              <p>60 ETH</p>
              <button className="border-2 border-red-400 px-3">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
