import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useData from "../../hooks/useData";

const SubCategoryProduct = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [data] = useData();
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const category = location.state;
  let newSubCategory = [];
  const newData = data.filter((item) => item.category === category);
  for (let i = 0; i < newData.length; i++) {
    const element = newData[i];
    newSubCategory.push(element.subcategory);
  }
  const subcategory = newSubCategory.filter(function (item, pos) {
    return newSubCategory.indexOf(item) === pos;
  });
  const handleCategory = (cat) => {
    const data = {
      category: category,
      subcategory: cat,
    };
    setSelectedSubCategory(data);
   
  };
  if (selectedSubCategory) {
    navigate("/all-products", { state: selectedSubCategory });
  }
  return (
    <>
      <h1 className="font-bold text-center text-2xl my-2">
        Choose the desire type of {category}
      </h1>
      <div className="flex justify-evenly">
        {subcategory?.map((cat, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">{cat}</h2>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCategory(cat)}
                  className="btn btn-primary"
                >
                  See All
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubCategoryProduct;
