import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";
//import Checkout from "./components/pages/checkout/checkout";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path="category/:name" element={<ItemListContainer />} />
            <Route path="ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="Cart" element={<CartContainer />} />
            <Route path="checkout" element={<CheckoutContainer />} />
            <Route path="Outlet" element={<Outlet />} />?
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
