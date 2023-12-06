// components/Layout.js
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col mt-2">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
