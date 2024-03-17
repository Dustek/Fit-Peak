
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData.json';

import './Shop.css';

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
    // return cart.reduce((total, product) => total + product.price, 0);
    // let totalPrice = calculateYourTotalPriceHere();
    // return Math.round(totalPrice);
    return Math.round(cart.reduce((total, product) => total + product.price, 0));

  };

  return (
    <div className="store ">

      
      <div className="products">
      {/* <h2 className='text-red-600'>Products</h2> */}
        {productsData.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name}  />
            <h3 className='heel' >{product.name}</h3>
            <p>{product.description}</p>
            <h5 className='hee'>£{product.price}</h5>
            <button className='but' onClick={() => addToCart(product)}>Add to Cart</button>
        {/* //remove item from cart */}
         </div>
        ))}
     </div>

<div className="shopping">
  <div className="shopping-cart">
    <h2>Shopping Cart</h2>
    {cart.map((product, index) => (
      <div key={index} className="cart-item">
        <img  src={product.image} alt={product.name} style={{ width: "50px", height: "50px" ,margin:"10px"}} />
        <p>£{product.price}</p>
        <button className='shop-but' onClick={() => removeFromCart(index)}>Remove</button>
      </div>
    ))}
    <div className="total">
      <h3>Total: £{getTotalPrice()}</h3>
    </div>
    {cart.length > 0 && (
      <Link className='proceed' to="/checkout">Proceed to Checkout</Link>
    )}
  </div>
</div>
</div>
  );
}

export default Shop;
          
