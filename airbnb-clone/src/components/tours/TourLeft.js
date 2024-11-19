import { DirectionsCar, FlightTakeoff, LocationOn, QueryBuilder } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Comment from '../Comment';
import { useDispatch, useSelector } from 'react-redux';
import { getcommentsByIdTour } from '../../redux/selectors';
import { fetchComments } from '../../redux/slices/CommentSlice';
import { ratingCore } from '../../utils/utill';

export default function TourLeft({ data }) {
  const [tour, setTour] = useState([])
  const [tourDetails, setTourDetails] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  const comments = useSelector((state) =>
    getcommentsByIdTour(state, tour.id)
  );
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
            <LocationOn className='icon' />
            <div className='content'>{tour && tour.start_location}</div>
          </div>
          <div className='wrap'>
            <QueryBuilder className='icon' />
            <div className='content'>{tour && tour.quantity_date}</div>
          </div>
          <div className='wrap'>
            <div className='content'>Phương tiện:</div>
            <FlightTakeoff className='icon' />
            <DirectionsCar className='icon' />
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
                        {t.time && <p><strong>{t.time === '-' ? '- ' : `${t.time}:`} </strong> {t.description}</p>}
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
          <div className='des-title'>Gía Tour bao gồm</div>
          <div className='content'>- Các món ăn đặc sản chế biến theo khẩu vị địa phương.</div>
          <div className='content'>- Vé tham quan tất cả các điểm có trong lịch trình.</div>
          <div className='content'>- Quà tặng tiện ích: 01 áo đồng phục thiết kế riêng cho doanh nghiệp/khách/chuyến.</div>
          <div className='content'>- Bảo hiểm du lịch trọn tour mức bồi thường tối đa 1 00.000.000vnđ đối với người trên 18 tuổi.</div>
          <div className='content'>- Bảo hiểm du lịch trọn tour mức bồi thường tối đa 30.000.000vnđ đối với người dưới 18 tuổi.</div>
          <div className='content'>- Chương trình Gala Dinner: MC chuyên nghiệp, âm thanh, ánh sáng, sân khấu, backdrop & frame, màn chiếu.</div>
        </div>
      </div>
      <div className='description'>
        <div className='wrap-des'>
          <div className='des-title'>Gía Tour không bao gồm</div>
          <div className='content'>- Vé máy bay khứ hồi.</div>
          <div className='content'>- Chi phí bồi dưỡng cho Lái xe, HDV với tinh thần cám ơn và khuyến khích phục vụ tận tình (khoảng từ 1 0.000 đến 20.000/ngày/khách).</div>
          <div className='content'>- Nước uống (bia, rượu, nước ngọt,…) trong các bữa ăn và đêm gala dinner.</div>
          <div className='content'>- Các dịch vụ vui chơi, ăn uống, giải trí ngoài chương trình đề cập mà quý khách muốn tận hưởng thêm trên tour.</div>
          <div className='content'>- Chi phí cá nhân: ăn uống, giải trí ngoài chương trình, giặt ủi, mà quý khách muốn tận hưởng thêm trên tour.</div>
          <div className='content'>- Thuế VAT 8%.</div>
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
          {
            comments.length === 0 ? <div style={{ fontSize: '24px', padding: '24px' }}>Tour chưa có bình luận</div> :
              (
                <div className='content'>
                  <div className='container-rate'>
                    <div className='score'>{(comments.reduce((accum, item) => accum + item.rating, 0) / comments.length)}/10</div>
                    <div className='text-core'>{ratingCore((comments.reduce((accum, item) => accum + item.rating, 0) / comments.length))}</div>
                    <div className='quantity-comment'>{comments.length} đánh giá</div>
                  </div>
                  <Comment id={tour.id} />
                </div>
              )
          }
        </div>
      </div>
    </div>
  )
}
