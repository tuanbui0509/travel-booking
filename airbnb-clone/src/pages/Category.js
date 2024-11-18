import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import ListArea from '../components/ListArea'
import ListCard from '../components/ListCard'
import Navbar from '../components/Navbar'
import "../styles/category.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { locationHotDomestic, toursRemainingSelector } from '../redux/selectors'
import { keyFilterChange } from '../redux/slices/FiltersSlice'
import SearchHome from '../components/SearchHome'
import { arrangementChange } from '../redux/slices/ArrangementSlice'
import { Search } from '@material-ui/icons'
export default function Category() {
    const { key } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(keyFilterChange(key));
    }, [dispatch, key]);

    const toursRemaining = useSelector(toursRemainingSelector);

    useEffect(() => {
        dispatch(arrangementChange('duration'));
    }, [dispatch]);
    const areasHotDomestic = useSelector(locationHotDomestic);
    return (
        <div className='position-relative'>
            <Navbar />
            <div style={{ backgroundColor: '#eeeeee' }}>
                <div className='container category'>
                    <SearchHome image={true} />
                    <div className='row'>
                        <div className='col-lg-3 areas'>
                            <div className='container-left'>
                                <ListArea title={"Địa điểm hot"}
                                    data={areasHotDomestic}
                                />
                            </div>

                        </div>
                        <div className='col-12 col-lg-9'>
                            <div className='container-right'>
                                <div className='title'>Tour Du Lịch Giá Tốt</div>
                                <div className='content'>
                                    <ListCard data={toursRemaining} />
                                </div>
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
