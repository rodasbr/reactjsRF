import ProductCard from "../../common/productcard/ProductCard";
import "./ItemListContainer.css";
import "./ItemListContainer.css";

const ItemList = ({ items, error }) => {
  console.log(items);
  return (
    <div className="item-list-container">
      {items.map(({ id, title, description, price, img }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            price={price}
            description={description}
            img={img}
            id={id}
          />
        );
      })}
      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default ItemList;
