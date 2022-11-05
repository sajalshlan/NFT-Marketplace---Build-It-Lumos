import React from 'react';
import Link from 'next/link';
import { FaWallet } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-around py-5 items-center bg-[#232323]">
      <Link
        href="/"
        className="text-white text-3xl font-semibold cursor-pointer"
      >
        assHub
      </Link>
      <ul className="flex space-x-10 text-white uppercase text-sm tracking-wider">
        <li className="hover:scale-105 transition-all ease-in font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition-all ease-in font-semibold">
          <Link href="/">My Assets</Link>
        </li>
        <li className="hover:scale-105 transition-all ease-in font-semibold">
          <Link href="/forms">Sell Assets</Link>
        </li>
      </ul>
      <button className="flex items-center gap-2 text-black bg-white py-2 px-4 rounded-lg font-semibold uppercase tracking-wide hover:scale-105 transition-all ease-in-out">
        Connect Wallet
        <span>
          <FaWallet />
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
