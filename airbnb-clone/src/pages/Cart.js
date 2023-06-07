import {Link} from "react-router-dom";
import {CartItem} from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/cart.scss";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeCart, updateCart} from "../redux/slices/CartsSlice";
import {clearSelectedTour, setSelectedTour} from "../redux/slices/SelectedTourSlice";

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
    // Lấy danh sách các tour trong giỏ hàng từ Redux store
    const cartItems = useSelector((state) => state.carts);

    // Lấy thông tin về tour được chọn từ Redux store
    const selectedTour = useSelector((state) => state.selectedTour);

    const dispatch = useDispatch();

    // Trạng thái khỏi tạo của tour được chọn (selectedItemId)
    const [selectedItemId, setSelectedItemId] = useState(selectedTour ? selectedTour.idCard : null);

    // xóa tour khỏi giỏ
    const handleDelete = (id) => {
        dispatch(removeCart(id)); // Gửi action xóa từ Redux store
        if (selectedItemId === id) {
            setSelectedItemId(null);
        }
        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        // Lấy dữ liệu từ localStorage (nếu có) và chuyển đổi từ chuỗi JSON thành mảng

        const updatedItems = storedItems.filter((item) => item.idCard !== id);
        // Lọc ra các mặt hàng khác với mặt hàng có idCard tương ứng

        localStorage.setItem("cart", JSON.stringify(updatedItems));
        // Lưu mảng dữ liệu mới vào localStorage
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
        dispatch(updateCart({idCard: itemId, passengerCount: quantity}));
    };


    // hàm xử lý tour được chọn để tiến hành thanh toán
    const handleSelection = (itemId) => {
        if (itemId === null) dispatch(clearSelectedTour());
        setSelectedItemId(itemId);
        dispatch(setSelectedTour(cartItems.find((item) => item.idCard === itemId)));
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
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item) => (
                                            <CartItem
                                                item={item}
                                                handleDelete={handleDelete}
                                                handleQuantityChange={handleQuantityChange}
                                                selectedItemId={selectedItemId}
                                                handleSelection={handleSelection}
                                                key={item.idCard}
                                            />
                                        ))
                                    ) : (
                                        <h4> Không có gì trong giỏ cả (!_!)</h4>
                                    )}
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
                                        placeholder={`${selectedItemId !== null ? cartItems.find((item) => item.idCard === selectedItemId)?.price : ""} x số người lớn`}
                                        inputMode="numeric"
                                        min="0"
                                    />
                                </div>
                                <div className="d-flex justify-content-between information">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="name"
                                        inputMode="numeric"
                                        placeholder={`${selectedItemId !== null ? cartItems.find((item) => item.idCard === selectedItemId)?.price * 0.6 : ""} x số trẻ em dưới 5 tuổi`}
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