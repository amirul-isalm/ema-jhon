const setLocalStorage = (key) => {
  const exist = getCart();
  let editCart = {};

  if (!exist) {
    editCart[key] = 1;
  } else {
    editCart = JSON.parse(exist);

    if (!editCart[key]) {
      editCart[key] = 1;
    } else {
      editCart[key] += 1;
    }
  }
  localStorage.setItem("myCart", JSON.stringify(editCart));
};

const getCart = () => localStorage.getItem("myCart");

const removeFromeLocalStore = (id) => {
    const myCart = JSON.parse(getCart())
    delete myCart[id]
    localStorage.setItem("myCart",JSON.stringify(myCart))
}

export { setLocalStorage, getCart,removeFromeLocalStore };
