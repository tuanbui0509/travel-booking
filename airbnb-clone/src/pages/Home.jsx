import React from 'react'
import Slider from '../components/Slider';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import HomeCollection from '../components/HomeCollection';

const Home = () => {
  return (
    <div>
      {/* <Announcement></Announcement> */}
      <Navbar />
      <Slider></Slider>
      <HomeCollection />
      <Footer />
    </div>
  )
}

export default Home