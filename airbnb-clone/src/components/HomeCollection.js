import React, { useEffect, useState } from 'react'
import HomeCollectionTitle from './HomeCollectionTitle'
import '../styles/homeCollection.scss'
import ListCard from './ListCard'

export default function HomeCollection() {
  const [dataTourXanh, setDataTourXanh] = useState([])
  const [dataTourSinhThai, setDataTourSinhThai] = useState([])
  const [dataTourCongDong, setDataTourCongDong] = useState([])

  useEffect(() => {
    // Hàm được gọi khi component được render hoặc state thay đổi
    fetchDataTourXanh();
    fetchDataTourSinhThai();
    fetchDataTourCongDong();
  }, []); // Tham số thứ hai là một mảng rỗng, chỉ gọi useEffect một lần sau khi component được mount

  async function fetchDataTourXanh() {
    try {
      const response = await fetch('https://travel-booking-1.onrender.com/api/tours?catagoryId=1&_limit=3'); // Gọi API để lấy dữ liệu
      const jsonData = await response.json(); // Chuyển đổi dữ liệu nhận được thành JSON
      setDataTourXanh(jsonData); // Cập nhật state với dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function fetchDataTourSinhThai() {
    try {
      const response = await fetch('https://travel-booking-1.onrender.com/api/tours?catagoryId=3&_limit=3'); // Gọi API để lấy dữ liệu
      const jsonData = await response.json(); // Chuyển đổi dữ liệu nhận được thành JSON
      setDataTourSinhThai(jsonData); // Cập nhật state với dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function fetchDataTourCongDong() {
    try {
      const response = await fetch('https://travel-booking-1.onrender.com/api/tours?catagoryId=2&_limit=3'); // Gọi API để lấy dữ liệu
      const jsonData = await response.json(); // Chuyển đổi dữ liệu nhận được thành JSON
      setDataTourCongDong(jsonData); // Cập nhật state với dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className='container home-collection'>
      <div className='row'>
        <div className='col-12'>
          <HomeCollectionTitle
            title={"Điểm đến du lịch xanh yêu thích"}
            strongText="Du lịch xanh"
            des={"là một hình thức du lịch bền vững, tập trung vào việc bảo vệ môi trường, tôn trọng văn hóa địa phương và tối ưu hóa lợi ích cho cộng đồng bản địa. Hình thức này ngày càng được ưa chuộng khi vấn đề bảo vệ môi trường và biến đổi khí hậu trở thành mối quan tâm toàn cầu."}
          />
        </div>
        <div className='col-12'>
          <ListCard
            data={dataTourXanh} priceRow={true}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <HomeCollectionTitle
            title={"Điểm đến du lịch cộng đồng yêu thích"}
            strongText="Du lịch cộng đồng"
            des={"là một hình thức du lịch phát triển dựa trên sự tham gia tích cực của cộng đồng địa phương, nơi khách du lịch được trải nghiệm cuộc sống, văn hóa, và phong tục tập quán bản địa. Hình thức này không chỉ mang lại lợi ích kinh tế mà còn thúc đẩy bảo tồn văn hóa và môi trường."}
          />
        </div>
        <div className='col-12'>
          <ListCard
            data={dataTourCongDong} priceRow={true}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <HomeCollectionTitle
            title={"Điểm đến du lịch sinh thái yêu thích"}
            strongText="Du lịch sinh thái"
            des={`là hình thức du lịch dựa vào các giá trị thiên nhiên, 
            gắn với bản sắc văn hóa địa phương với sự tham gia của cộng đồng nhằm giúp du khách có được 
            những trải nghiệm mới lạ đồng thời giúp mọi người hiểu được ý thức về việc bảo tồn thiên nhiên và bảo vệ môi trường.`}
          />
        </div>
        <div className='col-12'>
          <ListCard data={dataTourSinhThai} priceRow={true} />
        </div>
      </div>
    </div>
  )
}
