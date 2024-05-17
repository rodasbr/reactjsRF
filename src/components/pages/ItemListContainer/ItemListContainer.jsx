import React, { useState } from "react";
//import { products } from "../../../ProdutcsMock";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { db } from "../../../FireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState([null]);
  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });

    // let productsFiltered = products.filter(
    //   (product) => product.category === name
    // );
    // const getProducts = new Promise((resolve, reject) => {
    //   let x = true;
    //   //simular retraso de red de api
    //   if (x) {
    //     setTimeout(() => {
    //       resolve(name ? productsFiltered : products);
    //     }, 3000);
    //   } else {
    //     reject({ status: 400, message: "algo salio mal" });
    //   }
    // });
    // getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name]);
  // const addDocProducts = () => {
  //   let productsCollection = collection(db, "products");
  //   products.forEach((product) => addDoc(productsCollection, product));
  // };
  return (
    <>
      {/* //<button onClick={addDocProducts}>add</button> */}
      <h1 className="welcomeRf">Bienvenidos a RaceFuels</h1>
      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <div className="loader-container">
          <PuffLoader color="red" />
        </div>
      )}
    </>
  );
};
export default ItemListContainer;
