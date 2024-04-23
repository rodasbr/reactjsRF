import "../navbar/Navbar.css";
import Cart from "../../common/cart/cart.jsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="classContainerNavbar">
          <Link to="/" style={{ color: "red" }}>
            <img
              src="https://res.cloudinary.com/dlncnaofj/image/upload/v1713561952/logo_n7pmum.png"
              className="logo"
            ></img>
          </Link>
          <ul className="categories">
            <Link to="/">Todos los productos</Link>
            <Link to="category/combustible">Combustible</Link>
            <Link to="/category/indumentaria">Indumentaria</Link>
            <Link to="/category/accesorios">Accesorios</Link>
          </ul>
          <Cart />
          <Link to="/Cart"></Link>
        </div>
      </>
    </div>
  );
};

export default Navbar;
