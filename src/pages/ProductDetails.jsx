import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../services/api";

const ProductDetails = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  let fetchProduct = async () => {
    try {
      let response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-10 items-center">

        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-lg text-gray-500 mb-3">
            Category: {product.category}
          </p>

          <p className="text-3xl font-bold text-green-600 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-700 leading-7">
            {product.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;