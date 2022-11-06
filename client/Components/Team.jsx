import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import me from '../public/pic.jpg';
import Image from 'next/image';

const Team = () => {
  return (
    <section className="w-[85%] mx-auto">
      <h2>Our Team Members</h2>
      <div className="rounded-full w-fit items-center flex flex-col py-7 px-4 border-2 border-gray-600">
        <Image src={me} alt="profile-Aman" className="rounded-full h-40 w-40 border border-gray-400" />
        <p className="text-lg font-semibold my-4">Aman Mandal</p>
        <div className="flex space-x-4 text-2xl">
          <BsTwitter
            href="https://twitter.com/AmanMandal_"
            className="cursor-pointer"
          />
          <BsLinkedin />
          <BsGithub />
        </div>
      </div>
    </section>
  );
};

export default Team;
