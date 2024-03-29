import "../navbar/Navbar.css";
import Cart from "../../common/cart/cart.jsx";

export const Navbar = () => {
  return (
    <div>
      <h3 className="logo"></h3>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <Cart />
      </nav>
    </div>
  );
};

export default Navbar;
