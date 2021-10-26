import React, { useEffect, useState } from "react";
import { getCart } from "../../localstorage";
import CartContainer from "./CartContainer";

import Product from "./porduct/Product";
import "./ProductContainer.css";

const ProductContainer = (props) => {
  const storeData = JSON.parse(getCart());
  let key = [0]
  if (storeData) {
     key = Object.keys(storeData);
  }
 
const allProducts = props.allproducts;
  useEffect(() => {
    fetch("http://localhost:5000/product/apiKey", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(key),
    })
      .then((res) => res.json())
      .then((products) => {
        
        let findProduct = [];
        if (products.length) {
          for (const key in storeData) {
            const matching = products.find((product) => product.key === key);

            if (matching) {
              matching.quantity = localStorage[key];
              findProduct.push(matching);
            }
          }
          props.updateCart(findProduct);
        }
      });
  }, []);

  return (
    <div className="productContainer">
      {allProducts.map((product) => (
        <Product
          clicked={props.clicked}
          key={product.key}
          product={product}
        ></Product>
      ))}
    </div>
  );
};

export default ProductContainer;
