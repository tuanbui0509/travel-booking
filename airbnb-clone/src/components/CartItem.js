import {useEffect, useState} from "react";

export const CartItem = ({item, handleDelete, handleQuantityChange, selectedItemId, handleSelection}) => {
    const isSelected = selectedItemId === item.idCard; // Kiểm tra xem item này có được chọn hay không

    // hàm xử lý tick chọn
    const handleTick = () => {
        if (isSelected) {
            handleSelection(null); // Nếu item đã được chọn, bỏ chọn nó
        } else {
            handleSelection(item.idCard); // Nếu item chưa được chọn, chọn nó
        }
    };

    // hàm xử lý tăng số lượng
    const handleIncrease = () => {
        handleQuantityChange(item.idCard, item.passengerCount + 1);
    };
    //hàm xử lý giảm số lượng
    const handleDecrease = () => {
        if (item.passengerCount > 1) {
            handleQuantityChange(item.idCard, item.passengerCount - 1);
        }
    };

    return (<div className="d-flex justify-content-between align-items-center mt-3 pr-2 items rounded flex-wrap">
        <div className="d-flex flex-row flex-1">
            <img className="rounded image-tour-cart" src={item.image} alt={item.title}/>
            <div className="ml-2 brief">
                <span className="font-weight-bold d-block">{item.title}</span>
                <ul style={{whiteSpace: 'nowrap'}}>
                    <li>
                          <span className="spec">
                            <i className="far fa-clock item-icon"></i>Thời gian: {item.time}
                          </span>
                    </li>
                    <li>
                          <span className="spec">
                            <i className="far fa-calendar-alt item-icon"></i>Ngày khởi hành: {item.date}
                          </span>
                    </li>
                    <li>
                          <span className="spec">
                            <i className="fas fa-plane-departure mr-2"></i>Phương tiện: {item.plane}
                          </span>
                    </li>
                    <li>
                          <span className="spec">
                            <i className="fas fa-star mr-2"></i>Chất lượng: {item.start}
                          </span>
                    </li>
                    <li>
                          <span className="spec">
                            <i className="far fa-user item-icon"></i>Số người: {item.passengerCount}
                          </span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <span className="spec"><i className="fas fa-plus item-icon"></i>Sửa số lượng:</span>
                        <div className="btn-group">
                            <button className="btn btn-sm btn-rounded-minus" onClick={handleDecrease}>-</button>
                            <span className="btn btn-sm">{item.passengerCount}</span>
                            <button className="btn btn-sm btn-rounded-add" onClick={handleIncrease}>+</button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <div className="d-flex flex-row align-items-center flex-1 justify-content-end">
            {isSelected ? (<i className="fas fa-check-circle tick-icon-selected" onClick={handleTick}></i>) : (
                <i className="far fa-check-circle tick-icon" onClick={handleTick}></i>)}
            <span className="d-block font-weight-bold ml-3">{item.price}đ/1</span>
            <button className="btn-sm btn-outline-white ml-2 remove-btn" onClick={() => handleDelete(item.idCard)}>
                <i className="fas fa-trash-alt text-danger fa-lg"></i>
            </button>
        </div>
    </div>);
};
