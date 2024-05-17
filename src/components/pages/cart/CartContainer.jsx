import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  //let productosAgregados = [];
  let total = getTotalPrice();
  //return <Cart productosAgregados={productosAgregados} />;
  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteById={deleteById}
      total={total}
    />
  );
};

export default CartContainer;
