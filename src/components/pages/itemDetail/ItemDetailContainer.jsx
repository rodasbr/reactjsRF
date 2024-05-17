import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import { products } from "../../../ProdutcsMock";
import "./ItemDetail.css";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../FireBaseConfig";

import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  let initial = getQuantityById(+id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });

    // let itemFound = products.find((product) => product.id === +id);
    // const getProduct = new Promise((resolve, reject) => {
    //   if (itemFound === undefined) {
    //     reject("producto no encontrado");
    //   } else resolve(itemFound);
    // });
    // getProduct.then((res) => setItem(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };
    //console.log(fullObject);
    addToCart(product);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "tu producto fue agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
