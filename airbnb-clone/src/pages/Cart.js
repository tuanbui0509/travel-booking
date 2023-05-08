import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Cart.css";
import { Checkout } from "./Checkout";
import { useState } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
      duration: "4 ngày 3 đêm",
      departure_date: "11/06/2023",
      quantity: 2,
      price: "5,290,000",
      image:
        "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
    },
    {
      id: 2,
      name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
      duration: "4 ngày 3 đêm",
      departure_date: "11/06/2023",
      quantity: 2,
      price: "5,290,000",
      image:
        "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
    },
    {
      id: 3,
      name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
      duration: "4 ngày 3 đêm",
      departure_date: "11/06/2023",
      quantity: 2,
      price: "5,290,000",
      image:
        "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
    },
    {
      id: 4,
      name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
      duration: "4 ngày 3 đêm",
      departure_date: "11/06/2023",
      quantity: 2,
      price: "5,290,000",
      image:
        "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
    },
  ]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex >= 0) {
      // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng lên 1
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
  };
  const handleDelete = (id) => {
    // Lọc ra item cần xóa dựa trên id và cập nhật lại trạng thái của giỏ hàng
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };
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
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      handleDelete={handleDelete}
                    />
                  ))}
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
