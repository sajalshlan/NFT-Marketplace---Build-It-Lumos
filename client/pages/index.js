import Head from 'next/head';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div>
      <Head>
        <title>NFT Market Place</title>
        <meta name="description" content="A market place for NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  );
};

export default Home;
