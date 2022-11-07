import Head from 'next/head';
import Collections from '../Components/Collections';
import CreateNFT from '../Components/CreateNFT';
import Header from '../Components/Header';
import JoinCommunity from '../Components/JoinCommunity';

const Home = () => {
  return (
    <div className="bg-[#efefef] h-full pb-20">
      <Head>
        <title>NFT Market Place</title>
        <meta name="description" content="A market place for NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="w-[80%] mt-[36rem] md:mt-32 md:mb:32 flex flex-col md:flex-row bg-[#f6f6f6] justify-between align-top py-10 mx-auto rounded-lg text-4xl font-semibold shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] tracking-wider">
          <div className="leading-9  mx-auto my-4">
            <p>500+</p>
            <p>NFTs</p>
          </div>
          <div className="leading-9 mx-auto my-4">
            <p>2M+</p>
            <p>Buyers</p>
          </div>
          <div className="leading-9 mx-auto my-4">
            <p>50k+</p>
            <p>Sellers</p>
          </div>
        </div>
        <Collections />
        <CreateNFT />
        <JoinCommunity />
      </main>
    </div>
  );
};

export default Home;
