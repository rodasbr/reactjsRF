import React from "react";
import "../productcard/ProductCard.css";
import ProductCard from "../productcard/ProductCard.jsx";

const ProductCardContainer = (props) => {
  const { title, description, price, img, id } = props;

  let objetProps = {
    title,
    description,
    price,
    img,
    id,
  };
  return <ProductCard {...objetProps} />;
};

export default ProductCardContainer;
