import Head from 'next/head';
import Header from '../Components/Header';

const Home = () => {
  return (
    <div className="bg-[#efefef]">
      <Head>
        <title>NFT Market Place</title>
        <meta name="description" content="A market place for NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
