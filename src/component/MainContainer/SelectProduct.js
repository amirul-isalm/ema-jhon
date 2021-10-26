import React from "react";

const SelectProduct = (props) => {
     const { name, seller, price, key } = props.cart;
    const {removeItem}=props
  return (
    <div className="product">
      <div>
        <h4>{name}</h4>
        <p>By: {seller}</p>
        <p>
          Price: <b>${price}</b>
        </p>
        <button className="button" onClick={()=>removeItem(key)}>Remove to cart</button>
      </div>
    </div>
  );
};

export default SelectProduct;
