import React, { useEffect, useState } from 'react';
import "../styles/list-area.scss";
import { useDispatch, useSelector } from 'react-redux';
import { startlocationsSelector } from '../redux/selectors';
import { areaHot } from '../redux/slices/FiltersSlice';

export default function ListArea(prop) {
  const areas = useSelector(startlocationsSelector);
  const [area, setArea] = useState("")
  const dispatch = useDispatch()
  const handleAreaClick = (area) => {
    setArea(area)
  };

    useEffect(() => {
        dispatch(areaHot(area));
    }, [dispatch, area]);

  return (
    <div className='list-area'>
      <div className='title'>{prop.title}</div>
      <ul className='container-list'>
        {areas.map((area, index) => (
          <li key={index} onClick={() => handleAreaClick(area)}>
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
}
