import React, { useEffect, useState } from "react";
import CartContainer from "./CartContainer";
import ProductContainer from "./ProductContainer";
import "./Container.css";
import { setLocalStorage } from "../../localstorage";
import { NavLink } from "react-router-dom";
import CartDataOutsideCompo from "./CartDataOutsideCompo";

const Container = () => {
  const {cart, setCart} = CartDataOutsideCompo()
  const [pageCount, setPageCount] = useState(0);

  const [allproducts, setproduct] = useState([]);

  const [searchProduct, setSearchProduct] = useState([]);
  const [selectpage, setSelectPage] = useState(0);
  const [size, setSize] = useState(10);
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${selectpage}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setproduct(data.Products);
        setSearchProduct(data.Products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [selectpage]);
  

  function cartmanage(product) {
    const exist = cart.find((pd) => pd.key === product.key);
console.log(cart.length)
    if (exist) {
      product.quantity += 1;
    }
    const withOutExistProduct = cart.filter(
      (produc) => produc.key !== product.key
    );

    let newCart = [...withOutExistProduct, product];
    setCart(newCart);
    setLocalStorage(product.key);
  }

  function updateCartByLocalStoreData(data) {
    setCart(data);
  }

  const handelSearch = (event) => {
    const searchText = event.target.value;
    const matchProductToSearch = allproducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProduct(matchProductToSearch);
  };

  return (
    <div>
      <div className="inputFildDiv">
        <input
          className="inputFild"
          type="text"
          placeholder="Sharch here.."
          onChange={handelSearch}
        />
      </div>
      <div className="mainContainer">
        <div>
          <ProductContainer
            allproducts={searchProduct}
            clicked={cartmanage}
            updateCart={updateCartByLocalStoreData}
          ></ProductContainer>
          <div className="pages">
            {[...Array(pageCount).keys()].map((page) => (
              <button
                className={page === selectpage ? "selected" : ""}
                onClick={() => setSelectPage(page)}
              >
                {page+1}
              </button>
            ))}
          </div>
        </div>
        <CartContainer cart={cart}>
          <NavLink to="/review">
            <button className="button">Review order</button>
          </NavLink>
        </CartContainer>
      </div>
    </div>
  );
};

export default Container;
