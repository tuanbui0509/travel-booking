import {Link} from "react-router-dom";
import {CartItem} from "../components/CartItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/cart.scss";
import {useState} from "react";
import {useSelectedTour} from "../contexts/SelectedTourContext";

export const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
            time: "4 ngày 3 đêm",
            date: "11/06/2023",
            quantity: 2,
            price: "5,290,000",
            image:
                "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
        },
        {
            id: 2,
            name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
            time: "4 ngày 3 đêm",
            date: "11/06/2023",
            quantity: 2,
            price: "5,290,000",
            image:
                "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
        },
        {
            id: 3,
            name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
            time: "4 ngày 3 đêm",
            date: "11/06/2023",
            quantity: 2,
            price: "5,290,000",
            image:
                "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
        },
        {
            id: 4,
            name: "PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN",
            time: "4 ngày 3 đêm",
            date: "11/06/2023",
            quantity: 2,
            price: "5,290,000",
            image:
                "https://globaltravel.com.vn/wp-content/uploads/2020/10/globaltravel-tour-du-lich-gia-re-trong-nuoc-trang-an.jpg",
        },
    ]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const handleDelete = (id) => {
        // Lọc ra item cần xóa dựa trên id và cập nhật lại trạng thái của giỏ hàng
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
        if (selectedItemId === id) {
            setSelectedItemId(null); // Nếu item được xóa đã được chọn, bỏ chọn nó
        }
    };

    // Tính tổng tiền thanh toán
    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            const price = parseFloat(item.price.replace(/,/g, ""));
            total += price * item.quantity;
        });
        return total.toLocaleString("vi-VN");
    };
    // Tính tổng tiền thanh toán cho các CartItem đã được chọn
    const calculateTourSelected = () => {
        let total = 0;
        cartItems.forEach((item) => {
            if (item.id === selectedItemId) {
                const price = parseFloat(item.price.replace(/,/g, ""));
                total += price * item.quantity;
            }
        });
        return total.toLocaleString("vi-VN");
    };
    const handleQuantityChange = (itemId, quantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };
    const { setSelectedTour } = useSelectedTour();
    const handleSelection = (itemId) => {
        setSelectedItemId(itemId);
        const selectedTour = cartItems.find((item) => item.id === itemId);
        setSelectedTour(selectedTour);
    };
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="container mt-5 p-3 rounded cart">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="product-details mr-2">
                                <div className="d-flex flex-row align-items-center">
                                    <i className="fas fa-arrow-left"></i>
                                    <span className="ml-2">Tiếp tục thêm</span>
                                </div>
                                <hr/>
                                <h4 className="mb-0 mb-2">Shopping cart</h4>
                                <div className="overflow-auto overflow-cart">
                                    {cartItems.map((item) => (
                                        <CartItem
                                            item={item}
                                            handleDelete={handleDelete}
                                            handleQuantityChange={handleQuantityChange}
                                            selectedItemId={selectedItemId} // Truyền selectedItemId cho CartItem
                                            handleSelection={handleSelection}
                                            key={item.id} // Thêm key prop để tránh cảnh báo
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="payment-info blue-gradient-rgba">
                                <div className="d-flex justify-content-between information">
                                    <span>Tổng tiền giỏ hàng:</span>
                                    <span>{calculateTotal()}đ</span>
                                </div>
                                <div className="d-flex justify-content-between information">
                                    <span>Tổng tiền tour được chọn:</span>
                                    <span>{calculateTourSelected()}đ</span>
                                </div>
                                <Link className="text-reset me-3" to={`/checkout?total=${calculateTourSelected()}`}>
                                    <button className="btn btn-amber btn-block d-flex justify-content-between mt-3 rounded"
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
