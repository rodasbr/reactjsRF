import "../navbar/Navbar.css";
import Cart from "../../common/cart/cart.jsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="classContainerNavbar">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dlncnaofj/image/upload/v1713561952/logo_n7pmum.png"
          className="logo"
        ></img>
      </Link>
      <ul className="categories">
        <li>
          <Link to="/">Todos los productos</Link>
        </li>
        <li>
          <Link to="category/combustible">Combustible</Link>
        </li>
        <li>
          <Link to="/category/indumentaria">Indumentaria</Link>
        </li>
        <li>
          <Link to="/category/accesorios">Accesorios</Link>
        </li>
      </ul>
      <Cart />
      <Link to="/Cart"></Link>
    </div>
  );
};

export default Navbar;
