import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}
