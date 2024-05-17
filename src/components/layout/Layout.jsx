import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
export const Layout = ({}) => {
  return (
    <div>
      <Navbar />
      <Outlet className="outletStyles" />
      <Footer />
    </div>
  );
};

export default Layout;
