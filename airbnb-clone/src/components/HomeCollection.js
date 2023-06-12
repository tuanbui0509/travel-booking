import React from 'react'
import HomeCollectionTitle from './HomeCollectionTitle'
import '../styles/homeCollection.scss'
import ListCard from './ListCard'

export default function HomeCollection() {
  return (
    <div className='container home-collection'>
        <div className='row'>
            <div className='col-12'>
                <HomeCollectionTitle 
                    title={"Điểm đến yêu thích trong ngoài"}
                    des={"Lên rừng xuống biển. Trọn vẹn Việt Nam"}
                />
            </div>
            <div className='col-12'>
                <ListCard
                    data={""}
                />
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <HomeCollectionTitle 
                    title={"Điểm đến yêu thích nước ngoài"}
                    des={"Bao la thế giới. Bốn bể là nhà"}
                />
            </div>
            <div className='col-12'>
                <ListCard
                    data={""}
                />
            </div>
        </div>
    </div>
  )
}
