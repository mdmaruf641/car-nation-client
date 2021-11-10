import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container>
        <p>our Featured Cars</p>
        <h2>latest released Cars</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
