import ProductCard from "../../common/productcard/ProductCard";
import "../ItemListContainer/ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div>
      <div className="cards">
        <ProductCard
          title={"metanol"}
          description={"combustible"}
          price={15000}
          imageUrl={"/public/metanol.jpg"}
        />
        <ProductCard
          title={"remera"}
          description={"indumentaria"}
          price={9000}
          imageUrl={"/public/remera.jpg"}
        />
        <ProductCard
          title={"llaveros"}
          description={"accesorios"}
          price={8000}
          imageUrl={"/public/llaveros.jpg"}
        />
        <ProductCard
          title={"Buzo"}
          description={"indumentaria"}
          price={12000}
          imageUrl={"/public/buzoprovisorio.jpg"}
        />
        <ProductCard
          title={"Calcos"}
          description={"accesorios"}
          price={2000}
          imageUrl={"/public/calcos.jpg"}
        />
      </div>
    </div>
  );
};
export default ItemListContainer;
