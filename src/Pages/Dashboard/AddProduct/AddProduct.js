import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const [addedSuccess, setAddedSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://peaceful-ocean-27772.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          setAddedSuccess(true);
          reset();
        }
      });
  };

  return (
    <div className="addProduct">
      <h2>Add Your Product</h2>
      {addedSuccess && (
        <Alert className="mt-3 w-50 mx-auto" variant={"success"}>
          Your Product Successfully Added!
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-2 rounded px-3 py-2 fs-5 w-50"
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          className="my-2 rounded px-3 py-2 fs-5 w-50"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <br />
        <textarea
          className="my-2 rounded px-3 py-2 fs-5 w-50"
          placeholder="Description"
          {...register("description")}
        />
        <br />
        <input
          className="my-2 rounded px-3 py-2 fs-5 w-50"
          placeholder="Product image URL"
          {...register("img")}
        />
        <br />

        <input className="addButton" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
