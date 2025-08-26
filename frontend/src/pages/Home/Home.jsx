import React, { useState } from "react";
import "./Home.css";
import {
  Hero,
  Product,
  Featured,
  Sponsor,
  Banner,
  Review,
  TopDeals,
  News,
} from "../../index.js";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      {/* <Sponsor /> */}
      <Product category={category} setCategory={setCategory} />
      <Featured />
      <TopDeals />
      {/* <TopSales/> */}
      {/* <FlashSales/> */}
      <Banner />
      <News />
      <Review />
      <Newsletter />
    </div>
  );
};

export default Home;
