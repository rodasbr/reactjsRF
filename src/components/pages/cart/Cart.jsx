import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  return (
    <div className="CartStyles">
      <h1 className="cartS">carrito</h1>
      {cart.map((product) => (
        <div key={product.id} className="productsSelect">
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <h4>{product.quantity}</h4>
          <button
            onClick={() => deleteById(product.id)}
            className="buttonTrash"
          >
            eliminar
          </button>
        </div>
      ))}
      <div className="buttons">
        <h3 className="titleCart">el total a pagar es $ {total}</h3>
        <button onClick={clearCart} className="buttonClean">
          {" "}
          limpiar carrito
        </button>
        {/* //<h1 className="addProducts">productos que agregamos</h1> */}
        {/* <div>{productosAgregados}</div>; */}
        <Link to="/checkout">
          <button className="buttonFinish"> Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
