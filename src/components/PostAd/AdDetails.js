import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;
  const { register, control,reset, handleSubmit } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "features",
  });
  const onSubmit = (data) => {
    let newData= {
      ...item,
      ...data,
    }
    fetch(`https://datahost.herokuapp.com/product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Product added to Sell successfully");
        reset();
        if(data){
          navigate("/home");
        }
      });

  };
  return (
    <div className="bg-slate-50">
      <div className="flex  justify-evenly">
        <h1 className="font-bold my-1">
          Selected Category:{" "}
          <span className="text-blue-800">{item?.category}</span>
        </h1>
        <h1 className="font-bold my-1">
          Selected Sub Category:{" "}
          <span className="text-blue-800">{item?.subcategory}</span>
        </h1>
      </div>
      <hr />
      <div className="flex  justify-evenly">
        <div className="w-96">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Condition</h1>
            <div className="flex justify-between">
              <label className=" flex items-center">
                <input
                  className="mr-2 radio"
                  {...register("condition")}
                  type="radio"
                  value="Used"
                />
                Used
              </label>
              <label className=" flex items-center">
                <input
                  className=" mr-2 radio"
                  {...register("condition")}
                  type="radio"
                  value="new"
                />
                New
              </label>
            </div>
            <br />
            <h1>Authenticity</h1>
            <div className="flex justify-between">
              <label className=" flex items-center">
                <input
                  className="mr-2 radio"
                  {...register("authenticity")}
                  type="radio"
                  value="Original"
                />
                Original
              </label>
              <label className=" flex items-center">
                <input
                  className=" mr-2 radio"
                  {...register("authenticity")}
                  type="radio"
                  value="Refurbished"
                />
                Refurbished
              </label>
            </div>
            <br />
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Brand Name"
              {...register("brand", { required: false })}
            />{" "}
            <br />
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Model Name"
              {...register("model", { required: false })}
            />{" "}
            <br />
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Edition"
              {...register("edition", { required: false })}
            />{" "}
            <br />
            <h1>Add Features</h1>
            <ul>
              {fields.map((id, index) => (
                <li key={id}>
                  <input
                    className="input my-2 input-bordered  w-full max-w-xs"
                    placeholder="Input Features"
                    {...register(`features.${index}.feature${index + 1}`)}
                  />
                </li>
              ))}
            </ul>
            <button className="btn" type="button" onClick={() => append({})}>
              Add another feature
            </button>{" "}
            <br />
            <textarea
              className="input my-2 input-bordered  w-full max-w-xs"
              type="textArea"
              placeholder="Input Description (Optional)"
              {...register("description", { required: false })}
            />{" "}
            <br />
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Seller Name"
              {...register("name", { required: true })}
            />{" "}
            <br />
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Seller Email"
              {...register("email", { required: true })}
            />{" "}
            <br />
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Price"
              {...register("price", { required: true })}
            />{" "}
            <br />
            <input
              className="input my-2 input-bordered  w-full max-w-xs"
              placeholder="Input Location"
              {...register("location", { required: true })}
            />{" "}
            <br />
            <input className="btn my-2 w-full max-w-xs" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
