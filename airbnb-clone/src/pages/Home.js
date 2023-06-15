import React, { useState } from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeCollection from "../components/HomeCollection";
import SearchHome from "../components/SearchHome";
import { useDispatch, useSelector } from 'react-redux';
import { searchFilterChange } from "../redux/slices/FiltersSlice";
import { searchTextSelector, todoListSelector } from "../redux/selectors";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <SearchHome />
      {/* <Slider></Slider> */}
      <HomeCollection />
      <Footer />
    </div>
  );
};

export default Home;
