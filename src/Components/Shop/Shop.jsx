import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData.json';

const Shop = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from local storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="store">
      <h2>Products</h2>
      <div className="products">
        {productsData.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>£{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>=============================</div>
      <div>=============================</div>
      <h2>Shopping Cart</h2>
      <div className="shopping-cart">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
            <h3>{product.name}</h3>
            <p>£{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
        {/* Display total price */}
        <div className="total">
          <h3>Total: £{getTotalPrice()}</h3>
        </div>
        {/* Link to Checkout component */}
        {cart.length > 0 && (
          <Link to="/checkout">Proceed to Checkout
          </Link>
        )}

      </div>
    </div>
  );

}

export default Shop;