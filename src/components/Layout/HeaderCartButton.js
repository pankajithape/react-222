import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="buttonCart" onClick={toggleCartHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Favorites</span>
      <span className='badge'>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
