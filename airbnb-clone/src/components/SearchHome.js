import React, { useEffect, useState } from 'react'
import '../styles/search.scss'
import { LocationOn, Search, EventNote, FlightTakeoff } from '@material-ui/icons'
export default function SearchHome(prop) {
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
    <div className='search-home container-fluid mb-5 p-0 position-relative'>
        <img className='w-100' src={"https://cdn2.ivivu.com/2023/04/21/10/tour-top-20230421-1-.png"} alt='...'/>
        <div className='container container-search position-absolute translate-middle'>
            <div className='row container-wrap'>
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
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
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
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
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
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
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                    <div className='wrap-icon_search'
                        onClick={() => handleSearch()}
                    >
                        <Search className='icon'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
