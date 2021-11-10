import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your Product Successfully Added");
        reset();
      }
    });
  };

  return (
    <div>
      <h2>Add Your Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-2 w-50"
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          className="my-2 w-50"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <br />
        <textarea
          className="my-2 w-50"
          placeholder="Description"
          {...register("description")}
        />
        <br />
        <input
          className="my-2 w-50"
          placeholder="Product image URL"
          {...register("img")}
        />
        <br />

        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
