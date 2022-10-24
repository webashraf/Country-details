import React from 'react';

const Cart = (props) => {
    const cart = props.carts;
    console.log(cart);
    // let totalP = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalP = totalP + country.population;
    // }
    const totalP = cart.reduce((a, b) => a + b.population, 0);

    return (
        <div>
            <h4>Total People: {totalP}</h4>
        </div>
    );
};

export default Cart;