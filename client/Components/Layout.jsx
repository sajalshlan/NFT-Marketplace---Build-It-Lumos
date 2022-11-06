import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
