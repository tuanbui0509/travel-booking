import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeCollection from "../components/HomeCollection";
import SearchHome from "../components/SearchHome";
import { Search } from "@material-ui/icons";
import "../styles/buttonSearch.scss"
import HistoryTour from "../components/HistoryTour";

const Home = () => {

  return (
    <div className="position-relative" style={{backgroundColor:'rgb(46 205 17 / 24%)'}}>
      <Navbar />
      <SearchHome />
      <HistoryTour />
      <HomeCollection />
      <Footer />
      <div className="container_search">
        <Search className='icon' />
      </div>
    </div>
  );
};

export default Home;
