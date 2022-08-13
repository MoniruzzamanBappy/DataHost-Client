import React from "react";
import { useLocation } from "react-router-dom";
import useData from "../../hooks/useData";
import SingleProduct from './SingleProduct';

const AllProducts = () => {
  const location = useLocation();
  const [data] = useData();
  const { category, subcategory } = location.state;
  const newData = data.filter(
    (item) => item.category === category && item.subcategory === subcategory
  );
  return <div className="grid grid-cols-1 blog-posts lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6">
    {newData.map((item, index) => (
      <SingleProduct key={index} item={item}></SingleProduct>
    ))}
  </div>;
};

export default AllProducts;
