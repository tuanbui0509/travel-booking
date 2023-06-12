import React from "react";
import {formatPrice} from "../utils/utill";

export const CartItem = ({item, handleDelete, selectedItemId, handleSelection}) => {
    const isSelected = selectedItemId === item.id; // Kiểm tra xem item này có được chọn hay không
    // hàm xử lý tick chọn
    const handleTick = () => {
        if (isSelected) {
            handleSelection(null); // Nếu item đã được chọn, bỏ chọn nó
        } else {
            handleSelection(item.id); // Nếu item chưa được chọn, chọn nó
        }
    };


    return (
        <>
        <div className={`d-flex justify-content-between align-items-center m-2 p-2 items rounded mr-1 flex-wrap ${isSelected ? 'bg-tour-selected' : ''}`}>
            <div className="d-flex flex-row flex-1">
                <img className="rounded image-tour-cart" src={item.tour.image} alt={item.tour.title}/>
                <div className="ml-2">
                    <span className="font-weight-bold d-block">{item.tour.title}</span>
                    <ul style={{whiteSpace: "nowrap"}} className="ml-1">
                        <li>
                          <span className="spec text-center">
                            <i className="far fa-clock item-icon"></i>Thời gian: {item.tour.time}
                          </span>
                        </li>
                        <li>
                          <span className="spec text-center">
                            <i className="far fa-calendar-alt item-icon"></i>Ngày khởi hành: {item.tour.date}
                          </span>
                        </li>
                        <li>
                          <span className="spec">
                            <i className="fas fa-plane-departure item-icon-fas"></i>Phương tiện: {item.tour.plane}
                          </span>
                        </li>
                        <li>
                          <span className="spec">
                            <i className="fas fa-star item-icon-fas"></i>Chất lượng: {item.tour.start}
                          </span>
                        </li>
                        <li>
                          <span className="spec">
                            <i className="fas fa-users item-icon-fas"></i>Số hành khách tối đa: {item.tour.quantity}
                          </span>
                        </li>
                        <li>
                          <span className="spec text-center">
                            <i className="fas fa-user item-icon"></i>Số người lớn: {item.quantityAdult}
                          </span>
                        </li>
                        <li>
                          <span className="spec text-center">
                            <i className="fas fa-child item-icon "></i>Số trẻ em: {item.quantityChild}
                          </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center flex-1 justify-content-end">
                {isSelected ? (
                    <i className="fas fa-check-circle tick-icon-selected" onClick={handleTick}></i>
                ) : (
                    <i className="far fa-check-circle tick-icon" onClick={handleTick}></i>
                )}
                <span className="d-block font-weight-bold ml-3">{formatPrice(item.tour.price)}đ/1</span>
                <button className={`btn-sm ${isSelected ? "icon-trash-tour-selected" : "btn-outline-white"} ml-2 remove-btn`} onClick={() => handleDelete(item.id)}>
                    <i className="fas fa-trash-alt text-danger fa-lg"></i>
                </button>
            </div>
        </div>
    </>
    );
};
