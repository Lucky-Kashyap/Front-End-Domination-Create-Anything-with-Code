import React, { useEffect, useState } from "react";
import axios from "../utils/api";

// import { axios } from "../utils/api";

const Show = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    return () => {
      console.log("Destroy");
    };
  }, []);

  const getProducts = () => {
    // const api = "https://fakestoreapi.com/products";

    axios
      .get("products")
      .then((products) => {
        // console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        onClick={getProducts}
        className="px-3 py-2 bg-orange-500 mt-4 rounded-sm text-white text-sm"
      >
        Get Products
      </button>
      <hr />
      <ul>
        {products.length > 0
          ? products.map((item, index) => (
              <li key={index} className="rounded p-5 mb-2 bg-orange-300">
                Product Name: {item.title}
              </li>
            ))
          : "Loading....!!"}
      </ul>
    </>
  );
};

export default Show;
