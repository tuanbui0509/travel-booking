import React from "react";
import {formatPrice} from "../../utils/utill";

export const ItemTourCheckout = (prop) => {
    return (
        <>
                <a className="btn support-switchboard p-3 pr-4 pl-4 btn-block rounded" href="tel:1900 1808">
                    <span>Hỗ trợ giao dịch: <b>1900 1808</b></span>
                </a>
            <div className="mt-3">
                <div className="card" style={{width: "100%"}}>
                    <img className="card-img-top"
                         src={prop.selectedTour.tour.image}
                         alt={prop.selectedTour.tour.title}/>
                    <div className="card-body">
                        <h3>{prop.selectedTour.tour.title}</h3>
                        <div className="ml-2">
                            <ul style={{whiteSpace: "nowrap"}} className="ml-1">
                                <li>
                          <span className="spec text-center">
                            <i className="far fa-clock item-icon"></i>Thời gian: {prop.selectedTour.tour.time}
                          </span>
                                </li>
                                <li>
                          <span className="spec text-center">
                            <i className="far fa-calendar-alt item-icon"></i>Ngày khởi hành: {prop.selectedTour.tour.date}
                          </span>
                                </li>
                                <li>
                          <span className="spec">
                            <i className="fas fa-plane-departure item-icon-fas"></i>Phương tiện: {prop.selectedTour.tour.plane}
                          </span>
                                </li>
                                <li>
                          <span className="spec">
                            <i className="fas fa-star item-icon-fas"></i>Chất lượng: {prop.selectedTour.tour.start}
                          </span>
                                </li>
                                <li>
                          <span className="spec">
                            <i className="fas fa-users item-icon-fas"></i>Số hành khách tối đa: {prop.selectedTour.tour.quantity}
                          </span>
                                </li>
                                <li>
                          <span className="spec text-center">
                            <i className="fas fa-user item-icon"></i>Số người lớn: {prop.selectedTour.quantityAdult}
                          </span>
                                </li>
                                <li>
                          <span className="spec text-center">
                            <i className="fas fa-child item-icon "></i>Số trẻ em: {prop.selectedTour.quantityChild}
                          </span>
                                </li>
                            </ul>
                        </div>
                        <div className="priceTotal">
                            <h2>Tổng: <span id="total-price" className="amber-text">{formatPrice(prop.selectedTour.total_price)}</span><small>đ</small></h2>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}