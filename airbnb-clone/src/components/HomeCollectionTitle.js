import React from 'react'
import { Link } from 'react-router-dom'
import { DoubleArrow } from '@material-ui/icons';

export default function HomeCollectionTitle(prop) {
  return (
    <div className='d-flex flex-row justify-content-between mt-4 home-collection_title'>
        <h1 className='title'>{prop.title}</h1>
        <Link className='link' to={prop.link}>xem thêm<DoubleArrow className='icon'/></Link>
    </div>
  )
}
