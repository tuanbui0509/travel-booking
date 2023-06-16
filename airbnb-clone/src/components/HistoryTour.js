import React, { useState } from 'react'
import '../styles/historyTour.scss'
import ListCardHistory from './ListCardHistory'
import { getToursFromLocal } from '../utils/localStorageUtils';

function HistoryTour(props) {
    const [tourHistory, setTourHistory] = useState(getToursFromLocal())
  return (
    <div className='histoury-tour'>
        <div className='container' >
            <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <div className="media">
                                    <div className="m-2">
                                        <img className="lazy" src="https://www.ivivu.com/du-lich/content/img/icon-support.svg" alt="Tư Vấn Chuyên Nghiệp" />
                                    </div>
                                    <div className="media-body media-middle">
                                        <div className="media-heading">
                                            <div>Tư Vấn Chuyên Nghiệp</div>
                                            <span>Hỗ trợ nhiệt tình, chăm sóc chu đáo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="media">
                                    <div className="m-2">
                                        <img className="lazy" src="https://www.ivivu.com/du-lich/content/img/icon-location.svg" alt="Trải nghiệm đa dạng" />
                                    </div>
                                    <div className="media-body media-middle">
                                        <div className="media-heading">
                                            <div>Trải Nghiệm Đa Dạng</div>
                                            <span>Chọn tour phù hợp, giá tour hợp lý</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="media">
                                    <div className="m-2">
                                        <img className="lazy" src="https://www.ivivu.com/du-lich/content/img/icon-payment.svg" alt="Thanh Toán An Toàn" />
                                    </div>
                                    <div className="media-body media-middle">
                                        <div className="media-heading">
                                            <div>Thanh Toán An Toàn</div>
                                            <span>Linh hoạt, rõ ràng, bảo mật</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
            <div className='row'>
                <h2 className='title-tours'>Tours du lịch bạn đã xem gần đây</h2>
            </div>
            <div className='row'>
                <ListCardHistory data={tourHistory}/>
            </div>
                
        </div>
    </div>

  )
}

export default HistoryTour