import { Done, ErrorOutline, ChildCare } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { formatPrice } from '../../utils/utill'

export default function TourRight({ data }) {
  const [id, setId] = useState("")
  const [date, setDate] = useState("")
  const [priceAdult, setPriceAdult] = useState(0)
  const [priceChild, setPriceChild] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [quantityAdult, setQuantityAdult] = useState(1)
  const [quantityChild, setQuantityChild] = useState(0)
  const [tourServices, setTourServices] = useState([])
    useEffect(() => {
    if (data && data.start_date) {
      setId(data.id)
      setPriceAdult(Number(data.price_adult))
      setPriceChild(Number(data.price_child))
      setTotalPrice(Number(data.price_adult))
      setTourServices(data.tour_services)
      setDate(data.start_date)
    }
  }, [data]);

  const handlePrevAdult = () => {
    if(quantityAdult > 1) {
      setQuantityAdult(quantityAdult-1)
      setTotalPrice(totalPrice - priceAdult)
    }
    
  }

  const handleNextAdult = () => {
    setQuantityAdult(quantityAdult+1)
    setTotalPrice(totalPrice + priceAdult)
  }

  const handlePrevChild = () => {
    if(quantityChild > 0) {
      setQuantityChild(quantityChild-1)
      setTotalPrice(totalPrice - priceChild)
    }
    
  }

  const handleNextChild = () => {
    setQuantityChild(quantityChild+1)
    setTotalPrice(totalPrice + priceChild)
  }

  const handleAddCart = () => {
    console.log("id: ", id,", quantityAdult:", quantityAdult,  "quantityChild:", quantityChild, ", totalPrice: ",totalPrice);
  }
  return (
    <div className='tour-right'>
      <div className='top'>
        <h1 className='title'>Lịch khởi hành & giá</h1>
        <p>Chọn ngày khởi hành:</p>
        <div className='input'>
          <input
            value={date}
            type='text'
            readOnly
          />
        </div>
         <div className='couter'>
          <div className='p-2'>Người lớn</div>
          <div className='p-2 couter-price'>x {formatPrice(priceAdult)}</div>
          <div className='wrap-couter'>
            <div className='prev'
              onClick={() =>handlePrevAdult()}
            >&#8722;</div>
            <div className='number'>{quantityAdult}</div>
            <div className='next'
              onClick={() =>handleNextAdult()}
            >&#43;</div>
          </div>
        </div>
        <div className='couter'>
          <div className='p-2'>Trẻ em</div>
          <div className='p-2 couter-price'>
            {
               quantityChild > 0 && 
                "x" + formatPrice(priceChild)
            }
          </div>
          <div className='wrap-couter'>
            <div className='prev'
              onClick={() =>handlePrevChild()}
            >&#8722;</div>
            <div className='number'>{quantityChild}</div>
            <div className='next'
              onClick={() =>handleNextChild()}
            >&#43;</div>
          </div>
        </div>
        <div className='note-des'>
          <ErrorOutline className='icon' />
          <span>Liên hệ để xác nhận chỗ</span>
        </div>
        {
          quantityChild > 0 && 
          (
            <div className='note-des ml-1'>
              <ChildCare />
              <span>Trẻ em từ 2 đến 7 tuổi</span>
            </div>
          )
        }
         
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
