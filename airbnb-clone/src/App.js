import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Cart} from "./pages/Cart";
import {Checkout} from "./pages/Checkout";
import Tour from "./pages/Tour";
import Category from "./pages/Category";
import {SelectedTourProvider} from "./contexts/SelectedTourContext";
import {CartProvider} from "./contexts/CartContext";

function App() {
    return (
        <CartProvider>
            <SelectedTourProvider>
                <Router>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/productList" element={<ProductList />} />
                        <Route path="/productList/productId:" element={<Product />} />
                        <Route path="/tourList/tourId:" element={<Tour />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/tour" element={<Tour />} />
                        <Route path="/category" element={<Category />} />
                    </Routes>
                </Router>
            </SelectedTourProvider>
        </CartProvider>
    );
}

export default App;
