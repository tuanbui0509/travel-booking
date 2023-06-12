import React from 'react'
import { Link } from 'react-router-dom'
import { DoubleArrow } from '@material-ui/icons';

export default function HomeCollectionTitle(prop) {
  return (
    <div className='d-flex flex-column mt-5'>
        <h1 className='font-weight-bold'>{prop.title}</h1>
        <h4>{prop.des}</h4>
    </div>
  )
}
