import React, {useContext} from 'react'
import CardItem from './CardItem'

export default function ListCard(prop) {
  return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
        {
          prop.data && prop.data.map((tour) => {
            return <CardItem
                    key = {tour.id}
                    idCard={tour.id}
                    title={tour.name}
                    image={tour.image}
                    time={tour.quantity_date}
                    date={tour.start_date}
                    plane={"Bay khứ hồi"}
                    start={"4 sao"}
                    price={tour.price_adult}
                  />
          })
        }
        
      </div>
    
    
  )
}
