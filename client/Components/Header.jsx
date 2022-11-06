import React from 'react';
import NFTCard from './NFTCard';
import bandar from '../public/bandar.png';
import skeletons from '../public/skeletons.png';

const title = text => {
  return (
    <div className="text-white rounded-lg font-semibold bg-gray-600 py-2 px-3 hover:bg-[#232323] cursor-pointer">
      {text}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex w-[85%] justify-between mx-auto h-screen py-20">
      <div className="flex relative ">
        <NFTCard
          className="z-20"
          img={bandar}
          title="Bored Ape"
          price={5.3432}
        />
        <NFTCard
          className="absolute left-16 rotate-[16deg] z-10"
          img={skeletons}
          title="Bored Ape"
          price={5.3432}
        />
        {/* <NFTCard className="absolute left-20 rotate-[24deg]" /> */}
      </div>
      <div className="w-[35rem]">
        <h1 className="text-5xl text-[#232323] font-serif font-semibold leading-[3.2rem] ">
          Discover, <br />
          <span className="text-gray-600"> Collect and Sell </span> <br /> Extra
          Ordinary NFTs
        </h1>
        <p className="text-lg font-medium text-gray-500 mt-3">
          Explore the top collection of NFTs in this awesome market place and
          buy & sell NFTs at the finest price.
        </p>

        <div className="flex flex-wrap gap-3 mt-10">
          {title('Ape Collection')}
          {title('Newlyy')}
          {title('Avatars')}
          {title('Music')}
          {title('Groovy')}
          {title('Gamified NFTs')}
          {title('Artworks')}
          {title('Photography')}
          {title('Collectibles')}
        </div>

        <button className="text-white uppercase tracking-wide font-semibold py-3 text-2xl bg-[#232323] w-full rounded-lg  mt-20 border-2 border-gray-800 shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all ease-in-out">
          Mint Now
        </button>
      </div>
    </header>
  );
};

export default Header;
