import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeCollection from "../components/HomeCollection";
import SearchHome from "../components/SearchHome";
import { Search } from "@material-ui/icons";
import "../styles/buttonSearch.scss"

const Home = () => {

  return (
    <div className="bg-white position-relative">
      <Navbar />
      <SearchHome />
      {/* <Slider></Slider> */}
      <HomeCollection />
      <Footer />
      <div className="container_search">
        <Search className='icon' />
      </div>
    </div>
  );
};

export default Home;
