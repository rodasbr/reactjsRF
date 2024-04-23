import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<CartContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
