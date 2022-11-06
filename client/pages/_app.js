import '../styles/globals.css';
import Layout from '../Components/Layout';
import { TransactionProvider } from '../store/TransactionContext';

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TransactionProvider>
  );
}

export default MyApp;
