import React from "react";
import { Card, Button } from "react-bootstrap";
import "../productcard/ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <div className="card-container">
      <Card className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Precio: {price}</Card.Text>
          <Link to={`/ItemDetail/${id}`}>
            <Button className="buttonCard" variant="primary">
              ver detalle
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
