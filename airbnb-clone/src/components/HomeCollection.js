import React from 'react'
import HomeCollectionTitle from './HomeCollectionTitle'
import '../styles/homeCollection.scss'
import ListCardHome from './ListCardHome'

export default function HomeCollection() {
  return (
    <div className='container home-collection'>
        <div className='row'>
            <div className='col-12'>
                <HomeCollectionTitle 
                    title={"Tour trong nước"}
                    link={""}
                />
            </div>
            <div className='col-12'>
                <ListCardHome
                    data={""}
                />
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <HomeCollectionTitle 
                    title={"Tour nước ngoài"}
                    link={""}
                />
            </div>
            <div className='col-12'>
                <ListCardHome
                    data={""}
                />
            </div>
        </div>
    </div>
  )
}
