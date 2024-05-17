import React, { useContext, useState } from "react";
import Checkout from "./checkout";
import { CartContext } from "../../../context/CartContext";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../FireBaseConfig";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const [info, setInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //const total = getTotalPrice();
    let obj = {
      buyer: info,
      items: cart,
      total,
    };
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.log(error));

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });
    clearCart();
  };
  return (
    <Checkout
      info={info}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
