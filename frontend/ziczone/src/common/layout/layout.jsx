import Header from "../header/components/Header";
import Footer from "../footer/components/Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />

      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
