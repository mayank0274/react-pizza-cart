import Product from "./Product";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const pizzaData = await fetch(
          "https://star-spark-pasta.glitch.me/api/products"
        );
        const jsonData = await pizzaData.json();
        setProducts(jsonData);
        isLoading(false);
      } catch (err) {
        alert(err);
      }
    };
    fetchPizzaData();
  }, [loading]);

  return (
    <div className="container my-2 mx-auto">
      <h3>Our Menu</h3>

      {loading && <Spinner infoMsg=""/>}

      <div className="myPizzaList d-flex justify-content-center align-items-center flex-wrap">
        {products.map((pizza) => {
          return <Product key={pizza._id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
