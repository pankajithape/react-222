import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';
import {  useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const HeaderCartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Link to="/favorites">
      <button className="buttonCart" >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Favorites</span>
      <span className='badge'>{cartQuantity}</span>
      </button>
    </Link>
  );
};

export default HeaderCartButton;
