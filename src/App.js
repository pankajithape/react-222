import Header from "./components/Layout/Header";
import Beers from "./components/Beers/Beers";
import Cart from "./components/Cart/Cart";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>    
      <Routes>
        <Route path="favorites" element={<><Header/><Cart/></>}></Route>
        <Route path="/" element={<><Header/><Beers/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
