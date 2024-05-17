import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { Card } from "react-bootstrap";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <Card className="custom-card">
      <div className="item-detail-content">
        <div className="image-container">
          <Card.Img
            className="item-image"
            variant="top"
            src={item.img}
            alt={item.name}
          />
        </div>
        <div className="info-container">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Price: ${item.price}</Card.Text>
          </Card.Body>
          <CounterContainer
            className="custom-counter"
            stock={item.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      </div>
    </Card>
  );
};

export default ItemDetail;
