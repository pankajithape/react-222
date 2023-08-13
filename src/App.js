import { Fragment } from "react";
import Header from "./components/Layout/Header";
import SearchBar from "./components/Layout/Search";
import Beers from "./components/Beers/Beers";

function App() {
  return (
    <Fragment>    
      <Header />
      <Beers />
    </Fragment>
  );
}

export default App;
