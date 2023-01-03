import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import ExploreProduct from "./../ExploreProduct/ExploreProduct";
import "./Explore.css";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://car-nation-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="explore-nav">
        <Navigation></Navigation>
      </div>
      <Container>
        <h2 className="explore">Our All Cars</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <ExploreProduct
              key={product._id}
              product={product}
            ></ExploreProduct>
          ))}
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Explore;
