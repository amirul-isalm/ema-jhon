import { useEffect, useState } from "react";

const DataLoadOutSideInCompo = () => {
    const [product,setProduct]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
          .then((res) => res.json())
          .then((data) => setProduct(data.Products));
    
    }, [])
    return [product]
};

export default DataLoadOutSideInCompo;