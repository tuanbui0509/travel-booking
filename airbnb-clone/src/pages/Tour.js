import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TourLeft from '../components/tours/TourLeft'
import TourRight from '../components/tours/TourRight'
import '../styles/tour.scss'

export default function Tour() {
  return (
    <>
        <Navbar />
        <div className='container tour'>
            <div className='title'>Tour Hồng Kông 4N3Đ: Khám Phá Hồng Kông - Kết Hợp Tự Do Mua Sắm</div>
            <div className='container-rank'>
                <div className='point'>8.0</div>
                <div className='rank'>Rất tốt</div>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <TourLeft />
                </div>
                <div className='col-4'>
                    <TourRight />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
