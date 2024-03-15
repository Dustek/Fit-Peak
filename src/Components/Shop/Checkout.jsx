

import React, { useState, useEffect } from 'react';


const Checkout = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        // Load cart from local storage on component mount
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
        setCart(JSON.parse(storedCart));
        }
    }, []);
    
    return (
        <div className="checkout">
        <h2>Checkout</h2>
        <div className="cart-items">
            {cart.map((product, index) => (
            <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
                <h3>{product.name}</h3>
                <p>£{product.price}</p>
                <p>{product.description}</p>
            </div>
            ))}
        </div>
        <div className="total">
            <h3>Total: £{cart.reduce((total, product) => total + product.price, 0)}</h3>
        </div>
         
        </div>
    );
    };

export default Checkout;
