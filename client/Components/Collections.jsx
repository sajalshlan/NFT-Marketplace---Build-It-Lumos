import React from 'react';
import NFTCard from './NFTCard';

const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'Apes',
    img: '/bandar.png',
  },
  {
    id: 'c2',
    title: 'Skeletons',
    img: '/skeletons.png',
  },
  {
    id: 'c3',
    title: 'Power Rangers',
    img: '/powerRangers.png',
  },
  {
    id: 'c4',
    title: 'Photography',
    img: '/apeSmoker.png',
  },
  {
    id: 'c5',
    title: 'Games',
    img: '/games.jpg',
  },
  {
    id: 'c6',
    title: 'Collectibles',
    img: '/chhotaBandar.png',
  },
];

const Collections = () => {
  return (
    <section className="w-[85%] mx-auto py-20">
      <h2 className="text-4xl font-bold mb-8">
        Popular <span className="hover:underline">Collections</span>
      </h2>
      <div className="flex flex-wrap justify-between gap-8">
        {DUMMY_DATA.map(nft => (
          <NFTCard
            key={nft.id}
            img={nft.img}
            title={nft.title}
            collection={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
