import './BeerCard.css';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const BeerCard = (props) => {
  const dispatch = useDispatch();
  const { id, name, description, imgUrl,beerItem} = props;

  const favItems = useSelector((state) => state.cart.items);
  
  const isItemFav = favItems.find(fave=>fave.id===id)

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({...beerItem, isFav:true })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(
      cartActions.removeItemFromCart(id)
    );
  };

  return (
        <div className="product" key={id}>
          <div className="image-box">
            <img className="images" src={imgUrl} alt={name} />
          </div>
          <div className="text-box">
            <h2 className="item">{name.length > 15 ? name.substring(0, 15) + "... " : name}</h2>
            <p className="description">{description.length > 60 ? description.substring(0, 60) + "... " : description}</p>
          {!isItemFav && <button type="button" name="item-1-button" onClick={addToCartHandler} >Add to Favorite</button>}
          {isItemFav && <button type="button" className="removeFav" onClick={removeFromCartHandler}>Remove Favorite</button>}
  
    </div>
      </div>
  )
}

export default BeerCard;