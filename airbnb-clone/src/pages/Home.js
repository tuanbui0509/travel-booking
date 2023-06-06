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
  //lấy ra todolist trong redux
  const todoList = useSelector(todoListSelector)
  console.log(todoList);
  // truyền dữ liệu vào redux
  const dispatch = useDispatch();
  dispatch(searchFilterChange("123"));

  //lấy dữ liệu search trong FilterSlice
   const search = useSelector(searchTextSelector)
  console.log(search)
  return (
    <div>
      <Navbar />
      <SearchHome />
      {/* <Slider></Slider> */}
      <HomeCollection />
      <Footer />
    </div>
  );
};

export default Home;
