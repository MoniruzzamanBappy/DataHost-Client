import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useData from "./../../hooks/useData";

const PostAd = () => {
  const [data] = useData();

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  let newCategory = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    newCategory.push(element.category);
  }
  const category = newCategory.filter(function (item, pos) {
    return newCategory.indexOf(item) === pos;
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSelectedCategory(data);
  };
  const handleCategory = (cat) => {
    const data = {
      category: cat,
    };
    setSelectedCategory(data);
  };
  if (selectedCategory.category) {
    navigate("/subCategory", { state: selectedCategory });
  }
  return (
    <div className="flex h-screen justify-evenly">
      <div>
        <h1>Choose Category</h1>

        <div className=" w-96">
          {category.map((cat, index) => (
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
          <p>Create New Category</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Category Name"
              {...register("category", { required: false })}
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

export default PostAd;
