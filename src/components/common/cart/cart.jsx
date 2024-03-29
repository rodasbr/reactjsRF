import { FaCartPlus } from "react-icons/fa";
import "../../layout/navbar/Navbar.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <FaCartPlus color={"red"} size="2rem" />
      <span className="cart-counter">5</span>
    </div>
  );
};

export default Cart;
