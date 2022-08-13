import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import PostAd from "./components/PostAd/PostAd";
import Navbar from "./components/Shared/Navbar/Navbar";
import SubCategory from "./components/PostAd/SubCategory";
import AdDetails from "./components/PostAd/AdDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubCategoryProduct from "./components/Home/SubCategoryProduct";
import AllProducts from "./components/Home/AllProducts";

function App() {
  return (
    <div className="bg-slate-50 ">
      <Navbar />
      <div className="mx-6 h-screen mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/subCategory" element={<SubCategory />} />
          <Route path="/ad-details" element={<AdDetails />} />
          <Route path="/details" element={<SubCategoryProduct />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
