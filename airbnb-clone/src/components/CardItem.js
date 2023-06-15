import React, {useContext, useState} from "react";
import {
  EventNote,
  QueryBuilder,
  FlightTakeoff,
  Apartment,
  DoubleArrow,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../styles/cardItem.scss";
import { formatPrice } from "../utils/utill";
import {CartContext} from "../contexts/CartContext";
export default function CardItem(prop) {
  const [passengerCount, setPassengerCount] = useState(1);
  const { cartItems,addToCart, removeFromCart  } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    addToCart({ ...prop, passengerCount: passengerCount });
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(prop.idCard);
    setInCart(false);
  };
  // kiểm tra xem tour này có trong giỏ hàng chưa
  const isItemInCart = cartItems.some((item) => item.idCard === prop.idCard);
 // khởi tạo trạng thái đã thêm hay chưa
  useState(() => {
    setInCart(isItemInCart);
  }, []);
  return (
    <div className="col mt-4">
      <div className="card">
        <img src={prop.image} style={{minHeight: '197px'}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prop.title}</h5>
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column">
              <div className="time">
                <QueryBuilder className="icon" />
                <span>{prop.time}</span>
              </div>
              <div className="date">
                <EventNote className="icon" />
                <span>{prop.date}</span>
              </div>
              <div className="plan">
                <FlightTakeoff className="icon" />
                <span>{prop.plane}</span>
              </div>
              <div className="building">
                <Apartment className="icon" />
                <span>{prop.start}</span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between">
              <span className="price text-right">
                {formatPrice(prop.price)}đ
              </span>
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
