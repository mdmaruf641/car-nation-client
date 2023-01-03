import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "./../../../Hooks/useAuth";

const ReviewBox = () => {
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://car-nation-server.vercel.app/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          setReviewSuccess(true);
          reset();
        }
      });
  };
  return (
    <div>
      <h2>Put Your Review Here</h2>
      {reviewSuccess && (
        <Alert className="mt-3 w-50 mx-auto" variant={"success"}>
          Review submitted successfully!
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-2 rounded px-3 py-2 fs-5 w-50"
          placeholder="Name"
          defaultValue={user.displayName}
          {...register("name", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          className="my-2 rounded px-3 py-2 fs-5 w-50"
          placeholder="Rating (0-5)"
          type="number"
          {...register("rating", { min: 0, max: 5 })}
        />
        <br />
        <textarea
          className="my-2 rounded px-3 py-2 fs-5 w-50"
          placeholder="Your Comment"
          {...register("comment")}
        />
        <br />

        <input className="addButton" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReviewBox;
