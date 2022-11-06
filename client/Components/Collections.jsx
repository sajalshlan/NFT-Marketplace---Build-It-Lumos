import React from 'react';
import NFTCard from './NFTCard';

const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'Bored Ape',
    img: '/bandar.png',
    price: 5.2353,
  },
  {
    id: 'c2',
    title: 'Kook',
    img: '/nft3.png',
    price: 2.2125,
  },
  {
    id: 'c3',
    title: 'Weird Eth Diva',
    img: '/nft2.png',
    price: 3.2112,
  },
  {
    id: 'c4',
    title: 'Ape Smoker',
    img: '/apeSmoker.png',
    price: 6.6551,
  },
  {
    id: 'c5',
    title: 'Broken Dreams',
    img: '/nft1.png',
    price: 4.0921,
  },
  {
    id: 'c6',
    title: 'Chhota Bandar',
    img: '/chhotaBandar.png',
    price: 5.888,
  },
];

const Collections = () => {
  return (
    <section className="w-[85%] mx-auto py-20">
      <h2 className="text-4xl font-bold mb-8">
        Popular <span className="hover:underline">NFTs</span>
      </h2>
      <div className="flex flex-wrap justify-between gap-8">
        {DUMMY_DATA.map(nft => (
          <NFTCard
            key={nft.id}
            img={nft.img}
            title={nft.title}
            price={nft.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
