import React from "react";
import Card from "react-bootstrap/Card";
import "../productcard/ProductCard.css";

const ProductCard = (props) => {
  const { title, description, price, imageUrl } = props;

  return (
    <Card className="product-card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt="Imagen"
        className="product-image"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Precio:</strong> {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
