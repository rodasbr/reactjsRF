import "./ItemDetail.css";
import "./ItemDetailContainer";
const ItemDetail = ({ item }) => {
  return (
    <div>
      <div className="itemDetail">{item.title}</div>
    </div>
  );
};

export default ItemDetail;
