import "./Cart.css";
const Cart = ({ productosAgregados }) => {
  return (
    <div>
      <h1 className="addProducts">productos que agregamos</h1>
      <div>{productosAgregados}</div>;
    </div>
  );
};

export default Cart;
