import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Cart} from "./pages/Cart";
import {Booking} from "./pages/Booking";
import Tour from "./pages/Tour";
import Category from "./pages/Category";
import {addCart} from "./redux/slices/CartsSlice";
import {useDispatch} from "react-redux";
import {Payment} from "./pages/Payment";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Lấy dữ liệu từ localStorage
        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];

        // Đồng bộ dữ liệu vào Redux
        storedItems.forEach((item) => {
            dispatch(addCart(item));
        });
    }, []);
    return (
                <Router>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/productList" element={<ProductList />} />
                        <Route path="/productList/productId:" element={<Product />} />
                        <Route path="/tourList/tourId:" element={<Tour />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/tour" element={<Tour />} />
                        <Route path="/category" element={<Category />} />
                    </Routes>
                </Router>
    );
}

export default App;
