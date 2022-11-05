import Image from 'next/image';
import React from 'react';
import bandar from '../assets/bandar.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';

const NFTCard = ({ className }) => {
  return (
    <div
      className={`w-[20rem] bg-[#f3f3f3] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-lg px-5 py-8 flex flex-col h-fit ${className}`}
    >
      <Image src={bandar} height={250} width={200} className="mx-auto mb-4" />
      <p className="text-[#3e3e3e] font-semibold text-xl mb-2">
        2 crore ka bandar
      </p>
      <p className="text-[#3e3e3e] font-semibold text-sm">Mint Price</p>
      <p className="flex gap-2 items-center text-2xl font-semibold">
        5.6423
        <span>
          <FaEthereum />
        </span>
      </p>
      <button className="flex items-center text-white bg-black font-semibold gap-2 justify-center py-2 mt-5 rounded-lg uppercase tracking-wide hover:bg-gray-500 hover:scale-105 transition-all ease-in-out delay-75">
        Discover Art
        <span className="text-white">
          <AiOutlineArrowRight />
        </span>
      </button>
    </div>
  );
};

export default NFTCard;
