import {Link} from "react-router-dom";
import {CartItem} from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/cart.scss";
import React, {useContext, useState} from "react";
import {useSelectedTour} from "../contexts/SelectedTourContext";
import {CartProvider, CartContext} from "../contexts/CartContext";

export const Cart = () => {

    // "carts": [
    //     {
    //         "id": "",
    //         "quantity": "",
    //         "tour": [],
    //         "total_price": "",
    //         "status": ""
    //     }
    // ]
    const {cartItems, removeFromCart, setCartItems} = useContext(CartContext);
    const {selectedTour, setSelectedTour} = useSelectedTour();
    const [selectedItemId, setSelectedItemId] = useState(null);

    // xóa tour khỏi giỏ
    const handleDelete = (id) => {
        removeFromCart(id); // Sử dụng hàm removeFromCart từ CartContext
        if (selectedItemId === id) {
            setSelectedItemId(null);
        }
    };

    //tính tổng tiền các tour có trong giỏ
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            if (item.price) {
                const price = parseFloat(item.price);
                total += price * item.passengerCount;
            }
        });
        // trả về định dạng tiền VN
        return total.toLocaleString('vi-VN');
    };

    // tính tổng tiền tour được chọn
    const calculateTourSelected = () => {
        let total = 0;
        cartItems.forEach((item) => {
            if (item.idCard === selectedItemId && item.price) {
                const price = parseFloat(item.price);
                total += price * item.passengerCount;
            }
        });
        // trả về định dạng tiền VN
        return total.toLocaleString('vi-VN');
    };

    // hàm xử lý thay đổi số lượng hành khách
    const handleQuantityChange = (itemId, quantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.idCard === itemId) {
                return {...item, passengerCount: quantity};
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    // hàm xử lý tour được chọn để tiến hành thanh toán
    const handleSelection = (itemId) => {
        setSelectedItemId(itemId);
        const selectedTour = cartItems.find((item) => item.idCard === itemId);
        setSelectedTour(selectedTour);
    };
    return (
        <>
                <Navbar/>
                <div className="container">
                    <div className="container mt-5 p-3 rounded cart">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex flex-row align-items-center">
                                    <i className="fas fa-arrow-left"></i>
                                    <span className="ml-2">Tiếp tục thêm</span>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="product-details mr-2">

                                    <h4 className="mb-0 mb-2">Shopping cart</h4>
                                    <div className="overflow-auto overflow-cart">
                                        {cartItems.length > 0 ? cartItems.map((item) => (
                                            <CartItem
                                                item={item}
                                                handleDelete={handleDelete}
                                                handleQuantityChange={handleQuantityChange}
                                                selectedItemId={selectedItemId} // Truyền selectedItemId cho CartItem
                                                handleSelection={handleSelection}
                                                key={item.idCard} // Thêm key prop để tránh cảnh báo
                                            />
                                        )) : <h4> Không có gì trong giỏ cả (!_!)</h4> }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="payment-info blue-gradient-rgba mt-5">
                                    <div className="d-flex justify-content-between information">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="name"
                                            placeholder={`${selectedTour == undefined?'':selectedTour.price } x số người lớn`}
                                            inputmode="numeric"
                                            min="0"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between information">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="name"
                                            inputmode="numeric"
                                            placeholder={`${selectedTour == undefined?'':selectedTour.price*0.6 } x số trẻ em dưới 5 tuổi`}
                                            min="0"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between information">
                                        <span>Tổng tiền giỏ hàng:</span>
                                        <span>{calculateTotal()}đ</span>
                                    </div>
                                    <div className="d-flex justify-content-between information">
                                        <span>Tổng tiền tour được chọn:</span>
                                        <span>{calculateTourSelected()}đ</span>
                                    </div>
                                    <Link className="text-reset me-3" to={`/checkout?total=${calculateTourSelected()}`}>
                                        <button
                                            className="btn btn-amber btn-block d-flex justify-content-between mt-3 rounded"
                                            type="button">
                                            <span>{calculateTourSelected()}đ</span>
                                            <span>
                                          Thanh toán <i className="fas fa-arrow-right ml-1"></i>
                                        </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
        </>
    );
};
