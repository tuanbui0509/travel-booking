import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListArea from '../components/ListArea'
import "../styles/category.scss"
import "../styles/searchCategory.scss"
import ListCard from '../components/ListCard'
import { LocationOn, Search, EventNote, FlightTakeoff } from '@material-ui/icons'

export default function Category() {
 const [tour, setTour] = useState("Trong nước");
    const [starting, setStarting] = useState("");
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState("")

    const handleOnChaneStart = (e) => {
        setStarting(e.target.value)
    }
    const handleOnchaneDes = (e) => {
        setDestination(e.target.value)
    }
    const handleOnchaneDate = (e) => {
        setDate(e.target.value)
    }
    const handleSearch = () => {
        console.log(tour," ",starting," ",destination," ",date)
    }
  return (
    <>
        <Navbar />
            <div className='container category'>
                <div className='search-category'>
                <div className='row container-wrap'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                        <div className="d-flex flex-row group-input">
                            <span className="input-group-text bg-icon">
                                <FlightTakeoff className='icon'/>
                            </span>
                            <div className='d-flex flex-column flex-group'>
                                <label className='title'>Điểm khởi hành</label>
                                <input
                                onChange={(e)=> handleOnChaneStart(e)}
                                className='input'
                                placeholder="Hồ Chí Minh"
                                type="text" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                        <div className="d-flex flex-row group-input">
                            <span className="input-group-text bg-icon">
                                <LocationOn className='icon'/>
                            </span>
                            <div className='d-flex flex-column flex-group'>
                                <label className='title'>Điểm đến</label>
                                <input
                                onChange={(e) => handleOnchaneDes(e)}
                                className='input'
                                placeholder="Hồ Chi Minh"
                                type="text" 
                                
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                        <div className="d-flex flex-row group-input">
                            <span className="input-group-text bg-icon">
                                <EventNote className='icon'/>
                            </span>
                            <div className='d-flex flex-column flex-group'>
                                <label className='title'>Ngày đi</label>
                                <input
                                onChange={(e) => handleOnchaneDate(e)}
                                className='input'
                                placeholder="Chọn tour"
                                type="date" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                        <div className='wrap-icon_search'
                            onClick={() => handleSearch()}
                        >
                            <Search className='icon'/>
                        </div>
                    </div>
                </div>
                </div>

                <div className='row'>
                    <div className='col-3'>
                        <div className='container-left'>
                            <ListArea 
                            />
                            <ListArea 
                            />
                        </div>
                        
                    </div>
                    <div className='col-9'>
                        <div className='container-right'>
                            <div className='title'>Tour Du Lịch Hè Giá Tốt từ Hồ Chí Minh</div>
                            <div className='arrangement row'>
                                <div className='name col-3'>Sắp xếp theo:</div>
                                <div className='item col-3 active'>Thời lượng tour</div>
                                <div className='item col-3'>Ngày khởi hành</div>
                                <div className='item col-3'>Giá tour</div>
                            </div>
                            <div className='content'>
                                <ListCard />
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
            
        <Footer />
    </>
  )
}
