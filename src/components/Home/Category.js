import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ cat }) => {
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/details", { state: cat });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">{cat}</h2>
        <div className="card-actions justify-end">
          <button onClick={handleBuy} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
