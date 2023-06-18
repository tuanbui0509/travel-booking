import { DirectionsCar, FlightTakeoff, LocationOn, QueryBuilder, Person, ThumbUpAlt, SendSharp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
export default function TourLeft({data}) {
  const [tour, setTour] = useState([])
  const [tourDetails, setTourDetails] = useState([])
  const [comment, setComment] = useState("")
  const handleOnChaneComment = (e) => {
    setComment(e.target.value)
  }
  useEffect(() => {
    if (data) {
      setTour(data)
      setTourDetails(data.tour_details)
    }
  }, [data]);
  return (
    <div className='tour-left'>
        <div className='container-image'>
          <img src={tour && tour.image} className="img-fluid" alt="..."></img>
        </div>
        <div className='tour-header_info'>
          <div className='left'>
            <div className='wrap'>
              <LocationOn className='icon'/>
              <div className='content'>{tour && tour.start_location}</div>
            </div>
            <div className='wrap'>
              <QueryBuilder className='icon'/>
              <div className='content'>{tour && tour.quantity_date}</div>
            </div>
            <div className='wrap'>
              <div className='content'>Phương tiện:</div>
              <FlightTakeoff className='icon'/>
              <DirectionsCar className='icon'/>
            </div>
          </div>
          <div className='right'>
            <div className='name'>Mã Tour:</div>
            <div className='id'>{tour && tour.id}</div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>{tour && tour.description && tour.description.title}</div>
           <div className='content'>{tour && tour.description && tour.description.content}</div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>{tour && tour.name}</div>
           <div className='content'>
          {
            tourDetails && tourDetails.map((detail) => (
            <div key={detail.id} className='content-des'>
                <div className='content-des_title'>
                  {detail.name}
                </div>
                {
                  detail.timeline.map((t, id) => (
                    <div key={id} className='content'>
                      <p><strong>{t.time} :</strong> {t.description}</p>
                      {
                        t.image && <img src={t.image} className="img-fluid" alt="..."></img>
                      }
                     
     
                    </div>
                  ))
                }
                
              </div>
            ))
          }

            </div>
          </div>
        </div>
         <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>Thông tin Visa</div>
           <div className='content'>- Quý khách chỉ cần hộ Việt Nam còn nguyên vẹn và có hạn sử dụng ít nhất 6 tháng tính từ ngày kết thúc tour.</div>
           <div className='content'>- Miễn Visa cho khách Việt Nam.</div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>Hướng dẫn viên</div>
           <div className='content'>Trước 1 ngày hoặc 2 ngày đi sẽ gửi thông tin họp đoàn cho quý khách hàng, trước ngày khởi hành Hướng Dẫn Viên sẽ liên hệ trao đổi một số thông tin trong chuyến hành trình. </div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title-comment'>Đánh giá khách hàng về {tour && tour.name}</div>
           <div className='content'>
            <div className='container-rate'>
              <div className='score'>8.6/10</div>
              <div className='text-core'>Rất tốt</div>
              <div className='quantity-comment'>7 đánh giá</div>
            </div>
            <div className='container-comment'>
              <div className='title'>Đánh giá gần đây</div>
              <div className='comments'>
                <div className='item'>
                  <div className='account'><Person /> Nguyen DU Lap</div>
                  <div className='content-comment'>
                    <div className='container-rate'>
                      <div className='score'>8.6</div>
                      <div className='text-core'>Rất tốt</div>
                      <div className='date'>18-11-2022</div>
                    </div>
                    <div className='text-comment-1'>Khách sạn không có nước nóng không có wifi cầu tiêu thì lúc dội được lúc không. Đồ ăn cũng tạm ổn tour thì không được đi chơi thoải mái chủ yếu ngắm cảnh rồi tham quan. Thời gian 2 ngày đầu đi hơi gấp rút. Thích được cái đi grandworld nhưng mà trời mưa . Hdv rất nhiệt tình và thân thiện. Chỉ là chỗ khách sạn và tour đi không được hài lòng cho lắm</div>
                    <div className='text-comment-server'>iVIVU chân thành cảm ơn những lời góp ý từ gia đình chị Thu Vân, iVIVU rất tiếc vì chuyến đi của mình không như mong đợi, iVIVU sẽ ghi nhận và làm việc lại các dịch vụ và từng bước cải thiện, iVIVU hi vọng trong những chuyến đi sau iVIVU sẽ hỗ trợ gia đình chị tốt hơn nữa.</div>
                    <div className='container-feedback'>
                      <div className='text-like'>Thích</div>
                      <div className='feedback'>Phản hồi</div>
                      <div className='quantity-like'><div className='number'>10 </div><div className='container-like'><ThumbUpAlt /></div></div>
                    </div>
                    <div className='container-input-feedback'>
                      <input onChange={handleOnChaneComment} className='input-feedback' value={comment} type='text'/>
                      <div className='icon-send'><SendSharp /></div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='account'><Person /> Nguyen DU Lap</div>
                  <div className='content-comment'>
                    <div className='container-rate'>
                      <div className='score'>8.6</div>
                      <div className='text-core'>Rất tốt</div>
                      <div className='date'>18-11-2022</div>
                    </div>
                    <div className='text-comment-1'>Khách sạn không có nước nóng không có wifi cầu tiêu thì lúc dội được lúc không. Đồ ăn cũng tạm ổn tour thì không được đi chơi thoải mái chủ yếu ngắm cảnh rồi tham quan. Thời gian 2 ngày đầu đi hơi gấp rút. Thích được cái đi grandworld nhưng mà trời mưa . Hdv rất nhiệt tình và thân thiện. Chỉ là chỗ khách sạn và tour đi không được hài lòng cho lắm</div>
                    <div className='container-feedback'>
                      <div className='text-like'>Thích</div>
                      <div className='feedback'>Phản hồi</div>
                      <div className='quantity-like'><div className='number'>10 </div><div className='container-like'><ThumbUpAlt /></div></div>
                    </div>
                    <div className='d-none container-input-feedback'>
                      <input onChange={handleOnChaneComment} className='input-feedback' value={""} type='text'/>
                      <div className='icon-send'><SendSharp /></div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='account'><Person /> Nguyen DU Lap</div>
                  <div className='content-comment'>
                    <div className='container-rate'>
                      <div className='score'>8.6</div>
                      <div className='text-core'>Rất tốt</div>
                      <div className='date'>18-11-2022</div>
                    </div>
                    <div className='text-comment-1'>Khách sạn không có nước nóng không có wifi cầu tiêu thì lúc dội được lúc không. Đồ ăn cũng tạm ổn tour thì không được đi chơi thoải mái chủ yếu ngắm cảnh rồi tham quan. Thời gian 2 ngày đầu đi hơi gấp rút. Thích được cái đi grandworld nhưng mà trời mưa . Hdv rất nhiệt tình và thân thiện. Chỉ là chỗ khách sạn và tour đi không được hài lòng cho lắm</div>
                    <div className='container-feedback'>
                      <div className='text-like'>Thích</div>
                      <div className='feedback'>Phản hồi</div>
                      <div className='quantity-like'><div className='number'>10 </div><div className='container-like'><ThumbUpAlt /></div></div>
                    </div>
                    <div className='d-none container-input-feedback'>
                      <input onChange={handleOnChaneComment} className='input-feedback' value={""} type='text'/>
                      <div className='icon-send'><SendSharp /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}
