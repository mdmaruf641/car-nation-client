import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, SetReviews] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-ocean-27772.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => SetReviews(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="section-heading my-5">
          <p className="w-75 mx-auto text-uppercase">What Client Say</p>
          <h2 className="fw-bold">Testimonials</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
