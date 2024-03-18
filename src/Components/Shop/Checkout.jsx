
import React, { useState, useEffect } from 'react';
import './Checkout.css';

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
        <div className="main">
        <div className="checkout">
        <h3>Checkout</h3>
        <div className="cart-items">
            {cart.map((product, index) => (
            <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
                <h4>{product.name}</h4>
                <h5>£{product.price}</h5>
                {/* <p>{product.description}</p> */}
            </div>
            ))}
        </div>
        <div className="total">
            <h3>Order Total: £{cart.reduce((total, product) => total + product.price, 0)}</h3>
        </div>
        <div className="pay">
            <button className='bbbn'>Pay Now</button>
        </div>
        {/* <div className="giffy"></div> */}
        </div>
        <div className="giffy"></div>

        </div>
    );
    }

export default Checkout;