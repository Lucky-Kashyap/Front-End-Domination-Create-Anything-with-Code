import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err.message));
  };

  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((products) => {
        console.log(products);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="p-4">
      <h1>App</h1>

      <button
        onClick={getProducts}
        className="px-3 py-2 bg-orange-500 mt-4 rounded-sm text-white text-sm"
      >
        Get Products
      </button>
      <button
        onClick={addProducts}
        className="px-3 py-2 mx-10 bg-orange-500 mt-4 rounded-sm text-white text-sm"
      >
        Add Products
      </button>

      <hr className="my-10" />
      <ul>
        {products.length > 0
          ? products.map((item, index) => (
              <li key={index} className="rounded p-5 mb-2 bg-orange-300">
                Product Name: {item.title}
              </li>
            ))
          : "Loading....!!"}
      </ul>
    </div>
  );
}

export default App;
