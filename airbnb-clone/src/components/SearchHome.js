import React from 'react';
import '../styles/search.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchHome(prop) {


  const image = prop.image || false;

  return (
    <div className="search-home container-fluid p-0 position-relative">
      <img
        className={`w-100 ${image ? 'd-none' : ''}`}
        src={'https://imagetravel.vn/wp-content/uploads/2023/05/dinh-pha-din-e1680140028927-min.jpg'}
        alt="..."
      />
    </div>
  );
}
