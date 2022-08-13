import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import useData from "./../../hooks/useData";

const Home = () => {
  const [data] = useData();
  let newCategory = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    newCategory.push(element.category);
  }
  const uniqueArray = newCategory.filter(function (item, pos) {
    return newCategory.indexOf(item) === pos;
  });

  return (
    <div>
      <Link to="/post-ad" className="btn btn-warning flex">
        Post your Ad
      </Link>
      <h1 className="text-3xl font-bold text-center mt-6">
        Browse items by Category
      </h1>

      <div className="grid grid-cols-1 blog-posts lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6">
        {uniqueArray.map((cat, index) => (
          <Category key={index} cat={cat}></Category>
        ))}
      </div>
    </div>
  );
};

export default Home;
