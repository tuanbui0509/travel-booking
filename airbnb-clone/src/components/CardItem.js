import React from 'react'
import { EventNote, QueryBuilder, FlightTakeoff, Apartment, DoubleArrow } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import "../styles/cardItem.scss"
import { formatPrice } from '../utils/utill';
export default function CardItem(prop) {
  return (
    <div className='col mt-4'>
      <div className="card">
        <img src={prop.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prop.title}</h5>
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-column'>
              <div className='time'>
                <QueryBuilder className='icon'/>
                <span>{prop.time}</span>
              </div>
              <div className='date'>
                <EventNote className='icon'/>
                <span>{prop.date}</span>
              </div>
              <div className='plan'>
                <FlightTakeoff className='icon'/>
                <span>{prop.plane}</span>
              </div>
              <div className='building'>
                <Apartment className='icon'/>
              <span>{prop.start}</span>
            </div>
            </div>
            <div className='d-flex flex-column justify-content-between'>
              <span className='price text-right'>
                {formatPrice(prop.price)}đ
                </span>
              <Link to={`${prop.idCard}`} className='link text-right'>
                <DoubleArrow className='icon-link'/>
                  Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}