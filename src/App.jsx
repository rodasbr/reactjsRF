import { Navbar } from "../src/components/layout/navbar/Navbar.jsx";
// import { Counter } from "./components/common/counter/Counter.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
