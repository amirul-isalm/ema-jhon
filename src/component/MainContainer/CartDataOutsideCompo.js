import { useEffect, useState } from "react";
import { getCart } from "../../localstorage";

const CartDataOutsideCompo = () => {
  const [cart, setCart] = useState([]);
    const storeData = JSON.parse(getCart());
    let key=[0]
    if (storeData) {
        
   key = Object.keys(storeData);
  
 }

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
           
           if (products.length) {
             let cartData = [];
             for (let key in storeData) {
               const matchData = products.find(
                 (product) => product.key === key
               );
               if (matchData) {
                 matchData.quantity = storeData[key];

                 cartData.push(matchData);
               }
             }
             setCart(cartData);
           }
      } );

  

   
  }, []);
  return { cart, setCart };
};

export default CartDataOutsideCompo;
