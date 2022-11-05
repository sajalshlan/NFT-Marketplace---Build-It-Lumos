import React from 'react';
import NFTCard from './NFTCard';
import bandar from '../assets/bandar.png';
import skeletons from '../assets/skeletons.png';
import powerRangers from '../assets/powerRangers.png';
import games from '../assets/games.jpg';

const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'Apes',
    img: { bandar },
  },
  {
    id: 'c2',
    title: 'Skeletons',
    img: { skeletons },
  },
  {
    id: 'c3',
    title: 'Power Rangers',
    img: { powerRangers },
  },
  {
    id: 'c4',
    title: 'Photography',
    img: { bandar },
  },
  {
    id: 'c5',
    title: 'Games',
    img: { games },
  },
  {
    id: 'c6',
    title: 'Collectibles',
    img: { skeletons },
  },
];

const Collections = () => {
  return (
    <section className="w-[85%] mx-auto">
      <h2>Popular Collections</h2>
      <div className="flex flex-wrap justify-between gap-8">
        {DUMMY_DATA.map(nft => (
          <NFTCard
            key={nft.id}
            title={nft.title}
            collection={true}
            img={nft.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
