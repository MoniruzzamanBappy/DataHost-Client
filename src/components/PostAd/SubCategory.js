import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useData from "./../../hooks/useData";
import { useForm } from "react-hook-form";

const SubCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data] = useData();
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const category = location.state;
  let newSubCategory = [];
  const newData = data.filter((item) => item.category === category.category);
  for (let i = 0; i < newData.length; i++) {
    const element = newData[i];
    newSubCategory.push(element.subcategory);
  }
  const subcategory = newSubCategory.filter(function (item, pos) {
    return newSubCategory.indexOf(item) === pos;
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSelectedSubCategory(data);
  };
  const handleCategory = (cat) => {
    const data = {
      subcategory: cat,
    };
    setSelectedSubCategory(data);
  };
  const newCategory = {
    category: category.category,
    subcategory: selectedSubCategory.subcategory,
  };
  if (newCategory.subcategory) {
    navigate("/ad-details", { state: newCategory });
  }
  return (
    <div className="flex justify-evenly">
      <div>
        <h1 className="font-bold text-blue-800 my-2">
          Selected Category: {category?.category}
        </h1>
        <h1>Choose Sub Category</h1>

        <div className=" w-96">
          {subcategory?.map((cat, index) => (
            <div key={index} className="">
              <button
                onClick={() => handleCategory(cat)}
                className="btn my-2 w-full max-w-xs  "
              >
                {cat}
              </button>{" "}
              <br />
            </div>
          ))}
          <p>Create New Sub Category</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Category Name"
              {...register("subcategory", { required: false })}
            />{" "}
            <br />
            {/* errors will return when field validation fails  */}
            {errors.category && (
              <span className="text-red">category is required</span>
            )}
            <input className="btn my-2 w-full max-w-xs" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
