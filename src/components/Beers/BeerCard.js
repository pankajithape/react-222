import './BeerCard.css';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const BeerCard = (props) => {
  const dispatch = useDispatch();
  const { id, name, description, imgUrl } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        description,
      })
    );
  };

  return (
        <div className="product">
          <div className="image-box">
            <img className="images" src={imgUrl} alt={name} />
          </div>
          <div className="text-box">
            <h2 className="item">{name.length > 15 ? name.substring(0, 15) + "... " : name}</h2>
            <p className="description">{description.length > 45 ? description.substring(0, 45) + "... " : description}</p>
         <button type="button" name="item-1-button" onClick={addToCartHandler} >Add to Favorite</button>
          </div>
      </div>
  )
}

export default BeerCard;