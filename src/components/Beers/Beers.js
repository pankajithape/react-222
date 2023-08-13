import './Beers.css';

const Beers = () => {




  return (
    <>
      <div className="listing-section">
  <div className="product">
    <div className="image-box">
      <div className="images" id="image-1"></div>
    </div>
    <div className="text-box">
      <h2 className="item">Orange</h2>
      <h3 className="price">$4.99</h3>
      <p className="description">A bag of delicious oranges!</p>
      <label for="item-1-quantity">Quantity:</label>
      <input type="text" name="item-1-quantity" id="item-1-quantity" value="1"/>
      <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
    </div>
  </div>
  <div className="product">
    <div className="image-box">
      <div className="images" id="image-2"></div>
    </div>
    <div className="text-box">
      <h2 className="item">Apple</h2>
      <h3 className="price">$4.99</h3>
      <p className="description">A bag of delicious apples!</p>
      <label for="item-2-quantity">Quantity:</label>
      <input type="text" name="item-2-quantity" id="item-2-quantity" value="1"/>
      <button type="button" name="item-2-button" id="item-2-button">Add to Cart</button>
    </div>
  </div>

</div>
    
    </>
    
  )
}

export default Beers;