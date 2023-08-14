import Header from "./components/Layout/Header";
import Beers from "./components/Beers/Beers";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>    
      <Header />
      {showCart && <Cart />}
      <Beers  />
     </>
  );
}

export default App;
