import React, {useContext} from 'react'
import CardItem from './CardItem'
import {CartContext} from "../contexts/CartContext";

export default function ListCard(prop) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
      <CardItem
        idCard={"1"}
        title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}
        image={"https://picsum.photos/800/300/?random"}
        time={"4 ngày 3 đêm"}
        date={"11/06/2023"}
        plane={"Bay khứ hồi"}
        start={"3 sao"}
        price={5000000}
      />
      <CardItem
        idCard={"2"}
        title={"PHÚ QUỐC "}
        image={"https://picsum.photos/800/300/?random"}
        time={"4 ngày 3 đêm"}
        date={"11/06/2023"}
        plane={"Bay khứ hồi"}
        start={"3 sao"}
        price={5000000}
      />
      {/*      <CardItem*/}
      {/*  idCard={"1"}*/}
      {/*  title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}*/}
      {/*  image={"https://picsum.photos/800/300/?random"}*/}
      {/*  time={"4 ngày 3 đêm"}*/}
      {/*  date={"11/06/2023"}*/}
      {/*  plane={"Bay khứ hồi"}*/}
      {/*  start={"3 sao"}*/}
      {/*  price={5000000}*/}
      {/*/>*/}
      {/*      <CardItem*/}
      {/*  idCard={"1"}*/}
      {/*  title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}*/}
      {/*  image={"https://picsum.photos/800/300/?random"}*/}
      {/*  time={"4 ngày 3 đêm"}*/}
      {/*  date={"11/06/2023"}*/}
      {/*  plane={"Bay khứ hồi"}*/}
      {/*  start={"3 sao"}*/}
      {/*  price={5000000}*/}
      {/*/>*/}
      {/*      <CardItem*/}
      {/*  idCard={"1"}*/}
      {/*  title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}*/}
      {/*  image={"https://picsum.photos/800/300/?random"}*/}
      {/*  time={"4 ngày 3 đêm"}*/}
      {/*  date={"11/06/2023"}*/}
      {/*  plane={"Bay khứ hồi"}*/}
      {/*  start={"3 sao"}*/}
      {/*  price={5000000}*/}
      {/*/>*/}
      {/*      <CardItem*/}
      {/*  idCard={"1"}*/}
      {/*  title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}*/}
      {/*  image={"https://picsum.photos/800/300/?random"}*/}
      {/*  time={"4 ngày 3 đêm"}*/}
      {/*  date={"11/06/2023"}*/}
      {/*  plane={"Bay khứ hồi"}*/}
      {/*  start={"3 sao"}*/}
      {/*  price={5000000}*/}
      {/*/>*/}
    </div>
  )
}
