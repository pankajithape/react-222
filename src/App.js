import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import SearchBar from "./components/Layout/Search";
import Beers from "./components/Beers/Beers";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const [searchVal, setSearchVal] = useState('')
  // const [startSearch, setStartSearch]=useState(false)
  const cartItems = useSelector((state) => state.cart.items);
  const showCart = useSelector((state) => state.ui.cartIsVisible);


  const searchDataHandler = (search) => {
    setSearchVal(search);
    console.log("App.js", search)
  }


  return (
    <Fragment>    
      <Header onSaveHandler={searchDataHandler} />
      {showCart && <Cart />}
      {/* <Beers searchData={searchVal} startSearch={startSearch} /> */}
      <Beers searchData={searchVal}  />
     </Fragment>
  );
}

export default App;
