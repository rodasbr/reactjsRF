import { FaCartPlus } from "react-icons/fa";
import "../../layout/navbar/Navbar.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="/cart">
      <div className="cart-container">
        <FaCartPlus color={"red"} size="2rem" />
      </div>
    </Link>
  );
};

export default Cart;
