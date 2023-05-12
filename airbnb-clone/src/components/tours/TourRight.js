import { Done, ErrorOutline } from '@material-ui/icons'
import React from 'react'

export default function TourRight() {
  return (
    <div className='tour-right'>
      <div className='top'>
        <h1 className='title'>Lịch khởi hành & giá</h1>
        <p>Chọn ngày khởi hành:</p>
        <div className='input'>
          <input type='date'/>
        </div>
         <div className='couter'>
          <div className='p-2'>Số lượng</div>
          <div className='p-2 couter-price'>x 15.990.000</div>
          <div className='wrap-couter'>
            <div className='prev'>&#8722;</div>
            <div className='number'>0</div>
            <div className='next'>&#43;</div>
          </div>
        </div>
        <div className='note-des'>
          <ErrorOutline className='icon' />
          <span>Liên hệ để xác nhận chỗ</span>
        </div>
        <div className='wrap-price'>
          <div className='name'>Tổng cộng</div>
          <div className='content'>
            <div className='price'>20.790.000</div>
            <span>VND</span>
          </div>
        </div>
        <div className='wrap-button'>
          <button className='button_1 button'>Liên hệ tư vấn</button>
          <button className='button_2 button'>Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div className='bottom'>
        <div className='row'>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
          <div className='col-6 wrap'>
            <Done className='icon'/>
            <span>Bảo hiểm</span>
          </div>
        </div>
      </div>
    </div>
  )
}
