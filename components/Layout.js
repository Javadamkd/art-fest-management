import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

