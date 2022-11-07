import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-[#232323]">
      <div className="flex justify-between w-[85%] mx-auto">
        <div className="w-[28rem]">
          <h2 className="text-2xl font-bold">assHub</h2>
          <p className=" text-xs pr-3  md:text-sm text-gray-500 py-2">
            The largest NFT marketplace. Authentic and truly unique digital
            creation. Signed and issued by the creator, made possible by
            blockchain technology.
          </p>
          <ul className="flex space-x-4 mt-6 text-xl">
            <Link href="/">
              <BsTwitter />
            </Link>
            <Link href="/">
              <BsLinkedin />
            </Link>
            <Link href="/">
              <BsGithub />
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-sm md:text-lg mb-2 md:mb-4">
            Market Place
          </h2>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>Explore</li>
            <li>All NFT</li>
            <li>Collectibles</li>
            <li>Virtual Words</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-sm md:text-lg mb-2 md:mb-4">
            Resources
          </h2>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Blog</li>
            <li>Docs</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-sm md:text-lg mb-2 md:mb-4">
            Company
          </h2>
          <ul className="space-y-2 text-xs md:text-sm ">
            <li>About Us</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
