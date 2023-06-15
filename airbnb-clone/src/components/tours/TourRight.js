import { Done, ErrorOutline } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { formatPrice } from '../../utils/utill'

export default function TourRight({ data }) {
  const [id, setId] = useState("")
  const [date, setDate] = useState("")
  const [priceDefault, setPriceDefault] = useState(0)
  const [price, setPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [tourServices, setTourServices] = useState([])
    useEffect(() => {
    if (data) {
      setId(data.tourId)
      setPriceDefault(Number(data.price_adult))
      setPrice(Number(data.price_adult))
      setTotalPrice(Number(data.price_adult))
      setTourServices(data.tour_services)
    }
  }, [data]);

  const handleOnchaneDate = (e) => {
    setDate(e.target.value)
  }
  const handlePrev = () => {
    if(quantity > 1) {
      setQuantity(quantity-1)
      setPrice(price - priceDefault)
      setTotalPrice(price - priceDefault)
    }
    
  }

  const handleNext = () => {
    setQuantity(quantity+1)
    setPrice(price + priceDefault)
    setTotalPrice(price + priceDefault)
  }

  const handleAddCart = () => {
    console.log("id: ", id,", quantity:", quantity, ", totalPrice: ",totalPrice);
  }
  return (
    <div className='tour-right'>
      <div className='top'>
        <h1 className='title'>Lịch khởi hành & giá</h1>
        <p>Chọn ngày khởi hành:</p>
        <div className='input'>
          <input
            value={date}
            onChange={(e) => handleOnchaneDate(e)}
            type='date'
          />
        </div>
         <div className='couter'>
          <div className='p-2'>Số lượng</div>
          <div className='p-2 couter-price'>x {formatPrice(price)}</div>
          <div className='wrap-couter'>
            <div className='prev'
              onClick={() =>handlePrev()}
            >&#8722;</div>
            <div className='number'>{quantity}</div>
            <div className='next'
              onClick={() =>handleNext()}
            >&#43;</div>
          </div>
        </div>
        <div className='note-des'>
          <ErrorOutline className='icon' />
          <span>Liên hệ để xác nhận chỗ</span>
        </div>
        <div className='wrap-price'>
          <div className='name'>Tổng cộng</div>
          <div className='content'>
            <div className='price'>{formatPrice(totalPrice)}</div>
            <span>VND</span>
          </div>
        </div>
        <div className='wrap-button'>
          <button className='button_1 button'>Liên hệ tư vấn</button>
          <button className='button_2 button'
            onClick={()=> handleAddCart()}
          >Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div className='bottom'>
        <div className='row'>
          { tourServices && tourServices.length > 0 && tourServices.map(service => (
            <div key={service.id} className='col-6 wrap'>
              <Done className='icon'/>
              <span>{service.nameService}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
