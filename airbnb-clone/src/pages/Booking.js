import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import {FormInputInfoCustomer} from "../components/checkout/FormInputInfoCustomer";
import {Process} from "../components/Process";
import '../styles/process.scss'
import '../styles/booking.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedTour} from "../redux/slices/SelectedTourSlice";
import {formatPrice} from "../utils/utill";
import {saveInfoPassenger} from "../redux/slices/CheckoutSlice";
import {useNavigate} from "react-router-dom";
import {ItemTourCheckout} from "../components/checkout/ItemTourCheckout";

export const Booking = () => {
    const selectedTour = useSelector((state) => state.selectedTour);
    const [step, setStep] = useState(3);
    const checkout = useSelector((state) => state.checkout);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const count = checkout ? checkout.length : 0;
    const [passengerInfo, setPassengerInfo] = useState([]);

    // để
    const [isInitialRender, setIsInitialRender] = useState(true);

    const handleContinue = (listPassengerInfo) => {
        setPassengerInfo(listPassengerInfo);
        setIsInitialRender(false);
    };
    useEffect(() => {
        if (!isInitialRender) {
            try {
                const checkoutData = {
                    id : count,
                    user_id: 1,
                    tour: selectedTour.tour,
                    total_price: selectedTour.total_price,
                    payment_method: "Phương thức thanh toán",
                    status: "pending",
                    passenger_details: passengerInfo,
                };
                dispatch(saveInfoPassenger(checkoutData));

                // chuyển hướng đên trang chọn phương thức thanh toán
                navigate("/payment");
            } catch (error) {
                console.error(error);
            }
        }
    }, [isInitialRender]);


    useEffect(() => {
        dispatch(setSelectedTour(selectedTour));
    }, [selectedTour, dispatch]);

    return (
        <>
            <Navbar/>
            <Process step={step}/>
            <div className="container">
                <div className="row flex-wrap">
                    <div className="col-md-8 mt-4 ">

                        {selectedTour ? (
                            <FormInputInfoCustomer cart={selectedTour} handleContinue={handleContinue}/>
                        ) : (
                            <h3 className="text-danger">
                                <i className="fas fa-arrow-right ml-1"></i> Không có tour nào để
                                thanh toán
                            </h3>
                        )}

                    </div>
                    <div className="mt-4 col-md-4 ">

                        {
                            selectedTour ? <ItemTourCheckout selectedTour = {selectedTour}/> :""
                        }

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
