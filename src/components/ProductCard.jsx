import { useNavigate } from "react-router";

const ProductCard = ({ id, title, price, image, category }) => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product-details/${id}`)}
      className="border rounded-xl p-4 w-64 cursor-pointer shadow-md"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="mt-3 font-bold">{title}</h3>

      <p>{category}</p>

      <h4>${price}</h4>
    </div>
  );
};

export default ProductCard;