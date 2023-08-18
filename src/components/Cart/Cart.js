import { useSelector } from 'react-redux';
import Header from '../Layout/Header';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Header/>
      <Card className={classes.cart}>
        <h2>Your Favorites</h2>
        {cartItems.length === 0 && 
        <h4 className={classes.noFavs}>No Favorites have added</h4>
        }
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                description: item.description,
              }}
            />
          ))}
        </ul>
      </Card>
    </>
  );
};

export default Cart;
