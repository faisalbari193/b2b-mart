import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Sponsors from "../Components/Sponsors";
import Records from "../Components/Records";
import SpecialOffers from "../Components/SpecialOffers";
import UpcomingProducts from "../Components/UpcomingProducts";

const Home = () => {
  return (
    <>
      <title>HomePage</title>
      <div className="bg-gradient-to-b from-orange-100 via-yellow-300 to-white bg-opacity-90">
        <Banner />
        <Categories />
        <SpecialOffers />
        <UpcomingProducts />
        <Sponsors />
        <Records />
      </div>
    </>
  );
};

export default Home;
