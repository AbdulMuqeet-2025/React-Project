import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

const LandingPage = () => {
  let [products, setProducts] = useState([]);
  
  let fetchProducts = async () => {
    try {
      let response = await api.get("/products");

      console.log(response.data);

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.thumbnail}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default LandingPage;