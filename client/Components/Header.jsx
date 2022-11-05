import React from 'react';
import NFTCard from './NFTCard';

const title = text => {
  return (
    <div className="text-white rounded-lg font-semibold bg-[#232323] py-2 px-3 hover:bg-gray-600 cursor-pointer">
      {text}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex w-[85%] justify-between mx-auto h-screen py-20">
      <div className="flex relative">
        <NFTCard className='z-10'/>
        <NFTCard className='absolute left-16 rotate-[15deg]' />
      </div>
      <div className="w-[35rem]">
        <h1 className="text-5xl text-[#232323] font-serif font-semibold leading-[3.2rem] ">
          Discover, <br />{' '}
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

        <button className="text-white uppercase tracking-wide font-semibold py-3 text-2xl bg-gray-600 w-full rounded-lg  mt-20 border-2 border-gray-800 shadow-2xl hover:bg-black hover:scale-105 transition-all ease-in-out">
          Mint Now
        </button>
      </div>
    </header>
  );
};

export default Header;
