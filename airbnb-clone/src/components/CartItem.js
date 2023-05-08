import "../styles/Cart.css";
import { useState } from "react";
export const CartItem = () => {
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
    //... danh sách các items trong giỏ hàng
  ]);
  const handleDelete = (id) => {
    // Lọc ra item cần xóa dựa trên id và cập nhật lại trạng thái của giỏ hàng
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };
  return (
    <>
      <div className="container">
        {cartItems.map((item) => (
          <div
            className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded"
            key={item.id}
          >
            <div className="d-flex flex-row">
              <img
                className="rounded image-tour-cart"
                src={item.image}
                width="40"
              />
              <div className="ml-2 brief">
                <span className="font-weight-bold d-block">{item.name}</span>
                <span className="spec">{item.duration}</span>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <span className="d-block">{item.quantity}</span>
              <span className="d-block ml-5 font-weight-bold">
                ${item.price}
              </span>
              <button
                className="btn-sm btn-outline-danger ml-3"
                onClick={() => handleDelete(item.id)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
