import Image from 'next/image';
import React from 'react';
import pen from '../public/pen-tool.png';
import hammer from '../public/law.png';
import gallery from '../public/gallery.png';
import { BsStars } from 'react-icons/bs';
import { useRouter } from 'next/router';

const card = (img, title, text) => {
  return (
    <div className="p-10 rounded-2xl w-[22rem]  flex flex-col items-center bg-[#232323] ">
      <Image src={img} height={120} width={120} className="mb-3" />
      <p className="text-white font-semibold text-2xl mb-3">{title}</p>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

const CreateNFT = () => {
  const router = useRouter();

  const createNowHandler = () => {
    router.push('/forms');
  };

  return (
    <section className="w-[85%] mx-auto my-40">
      <h2 className="text-4xl font-semibold  text-center mb-8 flex justify-center">
        Create and Sell your NFTs{' '}
        <span>
          <BsStars />
        </span>
      </h2>

      <div className="flex justify-between">
        {card(
          pen,
          'Create Artwork',
          'Create your collection. Add social links, profile & banner images, and set a secondary sales fee.'
        )}
        {card(
          gallery,
          'Upload',
          'Upload your work, customize your NFTs with properties, stats and unlocable content.'
        )}
        {card(
          hammer,
          'Listing',
          'Set up and choose between auctions, fixed-price listings, and declining price listings'
        )}
      </div>

      <button
        onClick={createNowHandler}
        className="py-4 px-5 mt-10 mx-auto tracking-wider text-lg text-white rounded-xl bg-black font-medium w-[25rem] flex items-center justify-center gap-2  hover:scale-105 transition-all ease-in-out"
      >
        Create Now
      </button>
    </section>
  );
};

export default CreateNFT;
