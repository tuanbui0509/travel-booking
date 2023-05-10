import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Cart.css";
import { Checkout } from "./Checkout";

export const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container mt-5 p-3 rounded cart">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="product-details mr-2">
                <div className="d-flex flex-row align-items-center">
                  <i className="fa fa-long-arrow-left"></i>
                  <span className="ml-2">Continue Shopping</span>
                </div>
                <hr />
                <h6 className="mb-0">Shopping cart</h6>
                <div className="d-flex justify-content-between">
                  <span>You have 4 items in your cart</span>
                  <div className="d-flex flex-row align-items-center">
                    <span className="text-black-50">Sort by:</span>
                    <div className="price ml-2">
                      <span className="mr-1">price</span>
                      <i className="fa fa-angle-down"></i>
                    </div>
                  </div>
                </div>
                <div className="overflow-auto" style={{ maxHeight: "400px" }}>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Checkout />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
