import React from 'react';
import NFTCard from './NFTCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const styles = {
  backgroundImage: 'url(/10.jpg)',
  backgroundCover: 'cover',
  opacity: 1,
  borderRadius: 20,
};

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
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-40">
      <h2 className="text-4xl font-bold mb-8 flex justify-center text-black">
        Popular <span className="hover:underline">NFTs</span>
      </h2>
      <section className="w-[85%] mx-auto py-20 " style={styles}>
        <div
          className="flex flex-wrap justify-center  md:justify-between mx-auto gap-8 px-20"
          data-aos="fade-left"
        >
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
    </div>
  );
};

export default Collections;
