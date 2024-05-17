//import { CounterContainer } from "./CounterContainer";
import "./Counter.css";

const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div>
      <button className="btnSuma" onClick={sumar}>
        Sumar
      </button>
      <h2>{contador}</h2>
      <button className="btnResta" onClick={restar}>
        Restar
      </button>
      <button className="btnDetail" onClick={() => onAdd(contador)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Counter;
