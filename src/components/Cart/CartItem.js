import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name,description, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

   return (
    <li className={classes.item}>
      <header className={classes.cartBox}>
        <h4>{name}</h4>
        <div className={classes.price}>
          <span className={classes.itemprice}>{description.length > 50 ? description.substring(0, 90) + "... " : description}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
