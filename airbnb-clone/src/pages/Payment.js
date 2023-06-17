import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import '../styles/payment.scss'
import Navbar from "../components/Navbar";
import {Process} from "../components/Process";
import Footer from "../components/Footer";
import {ItemTourCheckout} from "../components/checkout/ItemTourCheckout";
import {useDispatch, useSelector} from "react-redux";
import {updatePayment} from "../redux/slices/CheckoutSlice";
import Swal from "sweetalert2";
import {addCheckoutToLocal, removeCartTourFromLocal} from "../utils/localStorageUtils";
import {clearSelectedTour} from "../redux/slices/SelectedTourSlice";
import {removeCart} from "../redux/slices/CartsSlice";

export const Payment = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/payment');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching payment:', error);
            }
        };

        fetchPayment();
    }, []);
    const [selectedPayment, setSelectedPayment] = useState(null)
    const selectedTour = useSelector((state)=>state.selectedTour);
    let checkout = useSelector((state)=> state.checkout);
    checkout = checkout[checkout.length-1];
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handlePaymentSubmit = () => {

        if(!selectedPayment){
            Swal.fire({
                title: "Thông báo",
                text: "Vui lòng chọn phương thức trước khi thanh toán",
                icon: "warning",
                confirmButtonText: "OK",
            });
            return;
        }

        // lấy tên loại hình thanh toán
        const payment_method = data.find(item => item.status)?.title;

        const newCheckout = {
            ...checkout,
            payment_method: payment_method
        }
        dispatch(updatePayment(newCheckout))

        // Chuyển hướng đến trang xác nhận thanh toán
        navigate("/checkout");
    };
    const handleSelectedPayment = (id) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                // nếu bấm chọn 2 lần sẽ trở về trạng thái chưa chọn
                if(item.status){
                    setSelectedPayment(null);
                    return {
                        ...item,
                        status: false,
                    };
                }
                setSelectedPayment(item.id);
                return {
                    ...item,
                    status: true,
                };
            }
            // chỉ được 1 cái chọn
            return {
                ...item,
                status: false,
            };
        });
        setData(updatedData);
    };

    return (
        <>
            <Navbar/>
            <Process step={4}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3>Chọn phương thức thanh toán:</h3>
                        {
                            data.map((item) => (
                                <>
                                    <div className="col-md-12 " key={item.id}>
                                        <div
                                            className={`col-md-12 header-payment p-2 mb-1 d-flex justify-content-between align-items-center ${item.status ? "payment-selected " : ""}`}
                                            onClick={() => handleSelectedPayment(item.id)}>
                                            <div className="col-md-10">
                                                <h5>{item.title}</h5>
                                                <h6>{item.description}</h6>
                                            </div>
                                            {
                                                item.status ? <i className="fas fa-check icon-tick"></i> :
                                                    <i className="fas fa-chevron-down "></i>
                                            }
                                        </div>
                                        {
                                            item.status ?
                                                <div className="col-md-12 content-payment mt-1 mb-4">
                                                    <p>{item.content}</p>
                                                </div>
                                                : ""
                                        }
                                    </div>
                                </>))

                        }
                        {/* Nút thanh toán */}
                        <div className="col-md-12">
                        <button
                            disabled={!selectedPayment}
                            className="btn btn-block btn-continue-booking rounded"
                            onClick={handlePaymentSubmit}
                        >
                            Thanh toán
                        </button>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        {
                            selectedTour ? <ItemTourCheckout selectedTour = {selectedTour}/> :""
                        }
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}