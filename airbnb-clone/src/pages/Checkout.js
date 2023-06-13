import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import {FormInputInfoCustomer} from "../components/checkout/FormInputInfoCustomer";
import {Process} from "../components/Process";
import '../styles/process.scss'
import '../styles/cart.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedTour} from "../redux/slices/SelectedTourSlice";
import {formatPrice} from "../utils/utill";

export const Checkout = () => {

  // "checkout": [
  //   {
  //     "user_id": 1,
  //     "tour_id": 1,
  //     "quantity": 1,
  //     "total_price": 1500000,
  //     "payment_method": "Phương thức thanh toán",
  //     "status": "pending",
  //     "passenger_details": [
  //       {
  //         "full_name": "",
  //         "phone": "",
  //         "email": "",
  //         "address": "",
  //         "city": "",
  //         "country": ""
  //       }
  //     ]
  //   }
  // ]
  const selectedTour = useSelector((state) => state.selectedTour);
  const [step, setStep] = useState(3);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setSelectedTour(selectedTour));
  }, [selectedTour, dispatch]);

  return (
    <>
      <Navbar />
      <Process step={step} />
      <div className="container">
        <div className="row flex-wrap">
          <div className="col-md-8 mt-4">
            <h3>Thông tin liên hệ</h3>
            <div className="row">
              <div className="col-md-6 mt-4">

                <div className="form-group">
                  <label>
                    Tên(<span className="text-danger">*</span>){" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Email(<span className="text-danger">*</span>){" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Nhập email của bạn"
                  />
                </div>
                  {selectedTour?
                      selectedTour.tour.catagoryId === 2?
                              <div className="form-group">
                                  <label>
                                      Số hộ chiếu(<span className="text-danger">*</span>){" "}
                                  </label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      id="passport"
                                      placeholder="Nhập số hộ chiếu"
                                  />
                              </div>

                          :"":""
                  }
                  <div className="form-group">
                      <label>Thành phố</label>
                      <input type="text" className="form-control" id="city" />
                  </div>

              </div>
              <div className="col-md-6 mt-4">
                <div className="form-group">
                  <label>
                    Số điện thoại(<span className="text-danger">*</span>){" "}
                  </label>
                  <input type="number" className="form-control" id="phone" placeholder="Nhập số điện thoại của bạn"/>
                </div>
                <div className="form-group">
                  <label>
                    Địa chỉ(<span className="text-danger">*</span>){" "}
                  </label>
                  <input type="text" className="form-control" id="address" placeholder="Nhập địa chỉ của bạn"/>
                </div>

                  {selectedTour?
                      selectedTour.tour.catagoryId === 2?
                              <div className="form-group">
                                  <label>Quốc tịch</label>
                                  <input type="text" className="form-control" id="national" />
                              </div>
                          :"":""
                  }
              </div>
            </div>

            {selectedTour ? (
              <FormInputInfoCustomer cart={selectedTour} />
            ) : (
              <h3 className="text-danger">
                <i className="fas fa-arrow-right ml-1"></i> Không có tour nào để
                thanh toán
              </h3>
            )}
          </div>
          <div className="col-md-4 mt-4">
            <h3>Tổng tiền </h3>
            <div className="row">
              <div className="col-md-12 mt-4">
                <div className="form-group">
                  <label htmlFor="total">Tổng</label>
                  <input
                    type="text"
                    className="form-control"
                    id="total"
                    value={ selectedTour ? formatPrice(selectedTour.total_price) + "đ": "0đ"}
                    readOnly
                  />
                </div>
                <div className="btn btn-block btn-success rounded">Lưu</div>
                <div className="btn btn-block btn-amber rounded">Tiếp tục</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
