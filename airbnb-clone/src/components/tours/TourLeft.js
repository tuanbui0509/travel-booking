import { DirectionsCar, FlightTakeoff, LocationOn, QueryBuilder } from '@material-ui/icons'
import React from 'react'
export default function TourLeft() {
  return (
    <div className='tour-left'>
        <div className='container-image'>
          <img src="https://picsum.photos/800/304/?random" class="img-fluid" alt="..."></img>
        </div>
        <div className='tour-header_info'>
          <div className='left'>
            <div className='wrap'>
              <LocationOn className='icon'/>
              <div className='content'>Hồ Chí Minh</div>
            </div>
            <div className='wrap'>
              <QueryBuilder className='icon'/>
              <div className='content'>4 Ngày 3 Đêm</div>
            </div>
            <div className='wrap'>
              <div className='content'>Phương tiện:</div>
              <FlightTakeoff className='icon'/>
              <DirectionsCar className='icon'/>
            </div>
          </div>
          <div className='right'>
            <div className='name'>Mã Tour:</div>
            <div className='id'>TO451</div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>Lạc lối giữa chốn Hương Cảng</div>
           <div className='content'>Là 1 trong 10 địa điểm hấp dẫn khách du lịch nhất trên thế giới, Hong Kong là một điểm du lịch an toàn và thú vị cho khách du lịch khắp nơi. Hong Kong được chia thành 4 khu: đảo Hong Kong, Cửu Long, Lạn Đầu và Tân Giới. Đảo Hong Kong và Cửu Long có các địa điểm du lịch nổi tiếng như Công viên Disneyland, Vịnh Vitoria, đỉnh núi Thái Bình, Miếu Huỳnh Đại Tiên, Đại lộ Ngôi Sao. Tha hồ cho bạn vui chơi và ngắm cảnh đẹp. Hong Kong còn là thiên đường mua sắm đầy thú vị với hàng trăm siêu thị và những con phố mua sắm nổi tiếng như chợ cho quý bà, chợ hoa, chợ cá vàng, chợ ngọc bán cẩm thạch. Cùng iVIVU khám phá thành phố Hương Cảng ngay hôm nay!</div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>Lạc lối giữa chốn Hương Cảng</div>
           <div className='content'>
            <div className='content-des'>
              <div className='content-des_title'>
                NGÀY 01: TPHCM – HONGKONG (ĂN TỐI)
              </div>
              <div className='content'>
                <p>
                  Quý khách tập trung tại sân bay Tân Sơn Nhất, đoàn làm thủ tục cho đoàn đi <strong>Hong Kong.</strong>
                </p>
                <img src="https://picsum.photos/800/304/?random" class="img-fluid" alt="..."></img>
                <div className='text-center'>Cầu Thanh Mã.</div>
                <p>Đến <strong>sân bay Quốc Tế Chek Lap Kok</strong>, xe và HDV địa phương đón và đưa đoàn bắt đầu hành trình đi qua <strong>‘’Cầu Thanh Mã”</strong>  (Tsing Ma Bridge) được xây dựng năm 1997 nối liền hai hòn đảo quan trọng của Hồng Kông là Tsing Yi và Ma Wan – cầu treo đẹp nhất Châu Á và lớn thứ 7 trên thế giới.</p>
                <img src="https://picsum.photos/800/304/?random" class="img-fluid" alt="..."></img>
                <div className='text-center'>Cầu Thanh Mã.</div>
                <p>Xe đưa Quý khách về khách sạn nhận phòng nghỉ ngơi, Buổi chiều tham quan mua sắm tại các khu trung tâm mua sắm sầm uất nhất Hồng Kông như khu “Mong kok” khu “chợ Quý Bà” tự do khám phá Hồng Kông về đêm.</p>
            </div>
            </div>

           <div className='content-des'>
              <div className='content-des_title'>
                NGÀY 02: TPHCM – HONGKONG (ĂN TỐI)
              </div>
              <div className='content'>
                <p>
                  Quý khách tập trung tại sân bay Tân Sơn Nhất, đoàn làm thủ tục cho đoàn đi <strong>Hong Kong.</strong>
                </p>
                <img src="https://picsum.photos/800/304/?random" class="img-fluid" alt="..."></img>
                <div className='text-center'>Cầu Thanh Mã.</div>
                <p>Đến <strong>sân bay Quốc Tế Chek Lap Kok</strong>, xe và HDV địa phương đón và đưa đoàn bắt đầu hành trình đi qua <strong>‘’Cầu Thanh Mã”</strong>  (Tsing Ma Bridge) được xây dựng năm 1997 nối liền hai hòn đảo quan trọng của Hồng Kông là Tsing Yi và Ma Wan – cầu treo đẹp nhất Châu Á và lớn thứ 7 trên thế giới.</p>
                <img src="https://picsum.photos/800/304/?random" class="img-fluid" alt="..."></img>
                <div className='text-center'>Cầu Thanh Mã.</div>
                <p>Xe đưa Quý khách về khách sạn nhận phòng nghỉ ngơi, Buổi chiều tham quan mua sắm tại các khu trung tâm mua sắm sầm uất nhất Hồng Kông như khu “Mong kok” khu “chợ Quý Bà” tự do khám phá Hồng Kông về đêm.</p>
            </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}
