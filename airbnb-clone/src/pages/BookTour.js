import {formatPrice} from "../utils/utill";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const BookTour = () => {
    const storedItems = JSON.parse(localStorage.getItem("checkout")) || [];
    console.log(storedItems)
    return (<>
        <Navbar/>
        <div className="container">
            <h3 className="text-center mt-4 title">Tour đã xác nhận</h3>
            <div className="hr-light"></div>
            <div className={`overflow-auto overflow-cart scrollbar ${storedItems.length > 0 ? '' : 'd-flex justify-content-center align-items-center'}`}>
                {storedItems.length>0 ? storedItems.map((item) => (<>
                        <div className="d-flex justify-content-between align-items-center m-2 p-2 items rounded mr-1 flex-wrap ">
                            <div className="d-flex flex-row flex-1 align-items-center">
                                <img className="rounded image-tour-cart" src={item.tour.image} alt={item.tour.title}/>
                                <div className="ml-2">
                                    <span className="font-weight-bold d-block">{item.tour.title}</span>
                                    <ul  className="ml-1">
                                        <li>
                                          <span className="spec text-center">
                                            <i className="fas fa-barcode item-icon"></i>Mã tour: {item.tour.idCard}
                                          </span>
                                        </li>
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
                                            <i className="fas fa-plane-departure item-icon"></i>Phương tiện: {item.tour.plane}
                                          </span>
                                        </li>
                                        <li>
                                          <span className="spec">
                                            <i className="fas fa-star item-icon"></i>Chất lượng: {item.tour.start}
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
                                        <li>
                                          <span className="spec text-center">
                                            <i className="fas fa-money-check item-icon"></i>Hình thức: {item.payment_method}
                                          </span>
                                        </li>
                                        <li>
                                          <span className="spec text-center">

                                            <i className="fas fa-money-check item-icon"></i> {item.status === "Đã thanh toán"?"Ngày thanh toán":"Ngày xác nhận thanh toán:"}: {item.date}
                                          </span>
                                        </li>
                                        <li>
                                          <span className="spec text-center">
                                              <i className="fas fa-money-check-alt item-icon"></i>Tổng tiền: <span className="font-weight-bold text-warning">{formatPrice(item.total_price)}</span>đ
                                          </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mr-2">
                                <span className="font-weight-bold text-warning">{item.status}...</span>
                            </div>
                        </div>
                    </>)
                ) : <h5 className="d-flex justify-content-center align-items-center"><i>Chưa có tour nào được xác nhận thanh toán!</i></h5>}
            </div>
        </div>
        <Footer/>
    </>)

}