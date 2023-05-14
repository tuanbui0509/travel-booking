import { useEffect, useState } from "react";

export const CartItem = ({ item, handleDelete, handleQuantityChange, selectedItemId, handleSelection }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [selected, setSelected] = useState(item.selected || false);
  const isSelected = selectedItemId === item.id; // Kiểm tra xem item có được chọn hay không

  useEffect(() => {
    handleQuantityChange(item.id, quantity);
  }, [quantity]);

  const handleTick = () => {
    if (isSelected) {
      handleSelection(null); // Nếu item đã được chọn, bỏ chọn nó
    } else {
      handleSelection(item.id); // Nếu item chưa được chọn, chọn nó
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
      <div className="d-flex justify-content-between align-items-center mt-3 pr-2 items rounded flex-wrap">
        <div className="d-flex flex-row">
          <img className="rounded image-tour-cart" src={item.image} width="40" alt={item.name} />
          <div className="ml-2 brief">
            <span className="font-weight-bold d-block">{item.name}</span>
            <ul>
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
                <i className="far fa-user item-icon"></i>Số người: {quantity}
              </span>
              </li>
              <li className='d-flex align-items-center'>
                <span className="spec"><i className="fas fa-plus item-icon"></i>Sửa số lượng:</span>

                <div className="btn-group ">
                  <button className="btn btn-sm btn-rounded-minus" onClick={handleDecrease}>-</button>
                  <span className="btn btn-sm">{quantity}</span>
                  <button className="btn btn-sm btn-rounded-add" onClick={handleIncrease}>+</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          {isSelected ? (
              <i className="fas fa-check-circle tick-icon-selected" onClick={handleTick}></i>
          ) : (
              <i className="far fa-check-circle tick-icon" onClick={handleTick}></i>
          )}
          <span className="d-block font-weight-bold ml-3">{item.price}đ/1</span>
          <button className="btn-sm btn-outline-white ml-2 remove-btn" onClick={() => handleDelete(item.id)}>
            <i className="fas fa-trash-alt text-danger fa-lg"></i>
          </button>
        </div>
      </div>
  );
};
