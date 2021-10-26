import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { removeFromeLocalStore } from "../../localstorage";
import CartContainer from "./CartContainer";
import CartDataOutsideCompo from "./CartDataOutsideCompo";
import DataLoadOutSideInCompo from "./DataLoadOutSideInCompo";

import SelectProduct from "./SelectProduct";

const ReviewOrder = () => {
  const history = useHistory()
  const [product] = DataLoadOutSideInCompo();

  const {cart, setCart} = CartDataOutsideCompo();

  const removeItem = (key) => {
   
    const notMatching = cart.filter(product => product.key !== key);
    removeFromeLocalStore(key)
    setCart(notMatching);
  };
  // const orderPlace = () => {
  //   localStorage.removeItem("myCart")
  //   history.push("/review/placeOrder");
  // }

  return (
    <div className="mainContainer ">
   
      
      <div >
        {cart.map((product) => {
          return (
            <SelectProduct
              removeItem={removeItem}
              key={product.key}
              cart={product}
            ></SelectProduct>
          );
        })}
      </div>
      <div>
        <CartContainer cart={cart}>
          <Link to="/shipping">
           
            <button className="button">
              Shipping order
            </button>
          </Link>
        </CartContainer>
      </div>
    </div>
  );
};

export default ReviewOrder;
