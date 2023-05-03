import React from 'react'
import Slider from '../components/Slider';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* <Announcement></Announcement> */}
      <Navbar />
      <Slider></Slider>
      <Footer />
    </div>
  )
}

export default Home