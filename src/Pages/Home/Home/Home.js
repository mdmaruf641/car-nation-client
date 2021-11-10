import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Featured></Featured>
      <Footer></Footer>
    </div>
  );
};

export default Home;
