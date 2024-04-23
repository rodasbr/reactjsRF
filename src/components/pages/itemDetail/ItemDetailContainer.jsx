import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../../ProdutcsMock";
import "./ItemDetail.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    let itemFound = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      if (itemFound === undefined) {
        reject("producto no encontrado");
      } else resolve(itemFound);
    });
    getProduct.then((res) => setItem(res));
  }, [id]);

  console.log(item);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
