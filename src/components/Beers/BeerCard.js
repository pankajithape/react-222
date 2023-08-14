import './BeerCard.css';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const BeerCard = (props) => {
  const dispatch = useDispatch();
  const { id , name, description } = props;

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
            <img className="images" src={props.imgUrl} alt={props.name} />
          </div>
          <div className="text-box">
            <h2 className="item">{props.name.length > 15 ? props.name.substring(0, 15) + "... " : props.name}</h2>
            <p className="description">{props.description.length > 45 ? props.description.substring(0, 45) + "... " : props.description}</p>
            <button type="button" name="item-1-button" onClick={addToCartHandler} >Add to Favorite</button>
          </div>
      </div>
  )
}

export default BeerCard;