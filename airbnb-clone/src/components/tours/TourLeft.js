import { DirectionsCar, FlightTakeoff, LocationOn, QueryBuilder } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
export default function TourLeft({data}) {
  const [tour, setTour] = useState([])
  const [tourDetails, setTourDetails] = useState([])
  useEffect(() => {
    if (data) {
      setTour(data)
      setTourDetails(data.tour_details)
    }
  }, [data]);
  return (
    <div className='tour-left'>
        <div className='container-image'>
          <img src={tour && tour.image} className="img-fluid" alt="..."></img>
        </div>
        <div className='tour-header_info'>
          <div className='left'>
            <div className='wrap'>
              <LocationOn className='icon'/>
              <div className='content'>{tour && tour.start_location}</div>
            </div>
            <div className='wrap'>
              <QueryBuilder className='icon'/>
              <div className='content'>{tour && tour.quantity_date}</div>
            </div>
            <div className='wrap'>
              <div className='content'>Phương tiện:</div>
              <FlightTakeoff className='icon'/>
              <DirectionsCar className='icon'/>
            </div>
          </div>
          <div className='right'>
            <div className='name'>Mã Tour:</div>
            <div className='id'>{tour && tour.id}</div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>{tour && tour.description && tour.description.title}</div>
           <div className='content'>{tour && tour.description && tour.description.content}</div>
          </div>
        </div>
        <div className='description'>
          <div className='wrap-des'>
            <div className='des-title'>{tour && tour.name}</div>
           <div className='content'>
          {
            tourDetails && tourDetails.map((detail) => (
            <div key={detail.id} className='content-des'>
                <div className='content-des_title'>
                  {detail.name}
                </div>
                {
                  detail.timeline.map((t, id) => (
                    <div key={id} className='content'>
                      <p><strong>{t.time} :</strong> {t.description}</p>
                      <img src={t.image} className="img-fluid" alt="..."></img>
     
                    </div>
                  ))
                }
                
              </div>
            ))
          }

            </div>
          </div>
        </div>
    </div>
  )
}
