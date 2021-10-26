import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { name, seller, price, img, stock } = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>By: {seller}</p>
                <p>Price: <b>${price}</b></p>
                <p>only {stock} left in stock - order soon</p>
                <button className="button" onClick={() =>props.clicked(props.product)}>{element} add to cart</button>
            </div>

        </div>
    );
};

export default Product;