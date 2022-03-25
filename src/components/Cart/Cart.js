import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <p>Order Summary</p>
                <p>selected items:{cart.length}</p>
        </div>
    );
};

export default Cart;