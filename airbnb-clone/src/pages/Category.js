import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ListArea from '../components/ListArea'
import ListCard from '../components/ListCard'
import Navbar from '../components/Navbar'
import "../styles/category.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toursRemainingSelector } from '../redux/selectors'
import { keyFilterChange } from '../redux/slices/FiltersSlice'
import SearchHome from '../components/SearchHome'
import { arrangementChange } from '../redux/slices/ArrangementSlice'
import { Search } from '@material-ui/icons'
export default function Category() {
    const { key } = useParams();
    const [activeSort, setActiveSort] = useState('duration'); // Trạng thái lưu trữ kiểu sắp xếp đang được chọn
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(keyFilterChange(key));
    }, [dispatch, key]);

    const toursRemaining = useSelector(toursRemainingSelector);

    const handleSortChange = (sortType) => {
        setActiveSort(sortType);
    };

    useEffect(() => {
        dispatch(arrangementChange(activeSort));
    }, [dispatch, activeSort]);

  return (
    <div className='position-relative'>
        <Navbar />
            <div className='container category'>
                <SearchHome image={true}/>
                <div className='row'>
                    <div className='col-lg-3 areas'>
                        <div className='container-left'>
                            <ListArea title={"Địa điểm hot trong nước"}
                            />
                            <ListArea title={"Địa điểm hot nước ngoài"}
                            />
                        </div>
                        
                    </div>
                    <div className='col-12 col-lg-9'>
                        <div className='container-right'>
                            <div className='title'>Tour Du Lịch Hè Giá Tốt từ Hồ Chí Minh</div>
                            <div className='arrangement row'>
                                <div className='name col-3'>Sắp xếp theo:</div>
                                <div className={`name col-3 ${activeSort === 'duration' ? 'active' : ''}`} onClick={() => handleSortChange('duration')}>
                                    Thời lượng tour
                                </div>
                                <div className={`item col-3 ${activeSort === 'departure' ? 'active' : ''}`} onClick={() => handleSortChange('departure')}>
                                    Ngày khởi hành
                                </div>
                                <div className={`item col-3 ${activeSort === 'price' ? 'active' : ''}`} onClick={() => handleSortChange('price')}>
                                    Giá tour
                                </div>
                            </div>
                            <div className='content'>
                                <ListCard data={toursRemaining} />
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
            
        <Footer />
        <div className="container_search">
            <Search className='icon' />
      </div>
    </div>
  )
}
