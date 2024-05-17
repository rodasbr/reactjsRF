import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import "../../layout/navbar/Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { getTotalItems } = useContext(CartContext);
  const total = getTotalItems();

  return (
    <Link to="/cart">
      <div className="cart-container">
        <FaCartPlus color={"red"} size="2rem" />
        {total > 0 && (
          <div className="cart-badge" style={{ color: "red" }}>
            {total}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Cart;
