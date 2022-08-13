import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = ({ item }) => {
  const { category, subcategory, title, price, description } = item;
  const navigate = useNavigate();
  const handleBuy = () => {
    toast("Item added to cart");
    navigate("/home");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <h2 className="card-title">{subcategory}</h2>
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">{price}</h2>
        <h2 className="card-title">{description}</h2>
      
        <div className="card-actions justify-end">
          <button onClick={handleBuy} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
