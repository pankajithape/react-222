import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';

const HeaderCartButton = () => {
 
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Favorites</span>
    </button>
  );
};

export default HeaderCartButton;
