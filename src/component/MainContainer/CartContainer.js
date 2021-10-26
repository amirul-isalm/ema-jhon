import React from 'react';


const CartContainer = (props) => {

    

    const { cart } = props
    let total = 0;
    let totalQuantity = 0;
    for (let produ of cart) {

        
        if (!produ.quantity) {
            produ.quantity = 1;
        }
        total = total + (produ.price * produ.quantity);
        totalQuantity += produ.quantity;

        

    }
    return (
        <div style={{margin:'0 10px'}}>
            <div style={{textAlign:'center'}}>
                <h2>Order summary </h2>
                <h4>Items Orderde:{totalQuantity}</h4>
           </div>
            <h3>Price: ${total.toFixed(2)}</h3>
            <h3>tax: ${(total * 0.2).toFixed(2)}</h3>
            <h2>Total price: ${(total + total * 0.2).toFixed(2)}</h2>
            {props.children}
           
        </div>
    );
};

export default CartContainer;