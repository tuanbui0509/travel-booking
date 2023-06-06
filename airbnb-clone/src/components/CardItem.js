import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Apartment, DoubleArrow, EventNote, FlightTakeoff, QueryBuilder,} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "../styles/cardItem.scss";
import {formatPrice} from "../utils/utill";
import {addCart, removeCart} from "../redux/slices/CartsSlice";

export default function CardItem(prop) {
    const [passengerCount, setPassengerCount] = useState(1);
// State để lưu trữ số lượng hành khách, và hàm để cập nhật giá trị của state

    let cartItems = useSelector((state) => state.carts);
// Sử dụng useSelector để lấy giá trị của state 'carts' từ Redux store

    const dispatch = useDispatch();
// Sử dụng useDispatch để lấy dispatch function từ Redux store

    const [inCart, setInCart] = useState(false);
// State để xác định xem mặt hàng đó đã có trong giỏ hàng hay chưa, và hàm để cập nhật giá trị của state

    const handleAddToCart = () => {
        const cartItem = cartItems.find((item) => item.idCard === prop.idCard);
        // Kiểm tra xem mặt hàng đã có trong giỏ hàng chưa bằng cách tìm kiếm trong mảng cartItems

        if (cartItem) return;
        // Nếu mặt hàng đã tồn tại trong giỏ hàng, không làm gì cả

        dispatch(addCart({...prop, passengerCount: passengerCount}));
        // Gửi action 'addCart' với thông tin mặt hàng và số lượng hành khách tới Redux store

        setInCart(true);
        // Cập nhật trạng thái inCart thành true (đã có trong giỏ hàng)

        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        // Lấy dữ liệu từ localStorage (nếu có) và chuyển đổi từ chuỗi JSON thành mảng

        const updatedItems = [...storedItems, {...prop, passengerCount: passengerCount}];
        // Thêm mặt hàng mới vào mảng dữ liệu lấy từ localStorage

        localStorage.setItem("cart", JSON.stringify(updatedItems));
        // Lưu mảng dữ liệu mới vào localStorage
    };

    const handleRemoveFromCart = () => {
        dispatch(removeCart(prop.idCard));
        // Gửi action 'removeCart' với idCard của mặt hàng tới Redux store để xóa mặt hàng khỏi giỏ hàng

        setInCart(false);
        // Cập nhật trạng thái inCart thành false (chưa có trong giỏ hàng)

        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        // Lấy dữ liệu từ localStorage (nếu có) và chuyển đổi từ chuỗi JSON thành mảng

        const updatedItems = storedItems.filter((item) => item.idCard !== prop.idCard);
        // Lọc ra các mặt hàng khác với mặt hàng có idCard tương ứng

        localStorage.setItem("cart", JSON.stringify(updatedItems));
        // Lưu mảng dữ liệu mới vào localStorage
    };

    useEffect(() => {
        const isItemInCart = cartItems.some((item) => item.idCard === prop.idCard);
        // Kiểm tra xem mặt hàng có trong giỏ hàng hay không bằng cách tìm kiếm trong mảng cartItems

        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        // Lấy dữ liệu từ localStorage (nếu có) và chuyển đổi từ chuỗi JSON thành mảng

        const isItemStored = storedItems.some((item) => item.idCard === prop.idCard);
        // Kiểm tra xem mặt hàng có trong mảng dữ liệu từ localStorage hay không

        setInCart(isItemInCart || isItemStored);
        // Cập nhật trạng thái inCart dựa trên kết quả của hai kiểm tra trên
    }, [cartItems, prop.idCard]);
// Hàm useEffect được gọi mỗi khi cartItems hoặc prop.idCard thay đổi, để kiểm tra xem mặt hàng có trong giỏ hàng hay không


    return (
        <div className="col mt-4">
            <div className="card">
                <img src={prop.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{prop.title}</h5>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column">
                            <div className="time">
                                <QueryBuilder className="icon"/>
                                <span>{prop.time}</span>
                            </div>
                            <div className="date">
                                <EventNote className="icon"/>
                                <span>{prop.date}</span>
                            </div>
                            <div className="plan">
                                <FlightTakeoff className="icon"/>
                                <span>{prop.plane}</span>
                            </div>
                            <div className="building">
                                <Apartment className="icon"/>
                                <span>{prop.start}</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-between">
              <span className="price text-right">
                {formatPrice(prop.price)}đ
              </span>
                            <Link to={`${prop.idCard}`} className="link text-right">
                                <DoubleArrow className="icon-link"/>
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex flex-center">
                        <button
                            className={`btn ${inCart ? "btn-danger" : "btn-success"} rounded`}
                            onClick={inCart ? handleRemoveFromCart : handleAddToCart}
                        >
                            <i className="fas fa-cart-plus"></i>{" "}
                            {inCart ? "Xóa khỏi giỏ" : "Thêm vào giỏ"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
