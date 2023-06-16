import React, {useContext} from 'react'
import CardItem from './CardItem'

export default function ListCard(prop) {
    // "id": 1,
    //     "name": "Tour Miền Bắc 5N4Đ: Hà Nội - Vịnh Hạ Long - Sapa",
    //     "image": "https://cdn2.ivivu.com/2018/12/24/17/ivivu-ha-long-aerial-03-750x390.jpg",
    //     "catagoryId": 1,
    //     "areaId": 1,
    //     "price_adult": "5350000",
    //     "price_child": "5350000",
    //     "quantity_date": "5 ngày 4 đêm",
    //     "start_location": "Hà Nội",
    //     "quantity": "12",
    //     "vehicle": [
    //     {
    //         "id": 1,
    //         "nameVehicle": "Ô tô"
    //     }
    // ],
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
        priceAdult={5000000}
        priceChild={5000000}
        quantity = {10}
        catagoryId={2}
      />
      <CardItem
        idCard={"2"}
        title={"PHÚ QUỐC "}
        image={"https://picsum.photos/800/300/?random"}
        time={"4 ngày 3 đêm"}
        date={"11/06/2023"}
        plane={"Bay khứ hồi"}
        start={"3 sao"}
        priceAdult={5000000}
        priceChild={5000000}
        quantity = {20}
        catagoryId={1}
      />
            <CardItem
        idCard={"3"}
        title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}
        image={"https://picsum.photos/800/300/?random"}
        time={"4 ngày 3 đêm"}
        date={"11/06/2023"}
        plane={"Bay khứ hồi"}
        start={"3 sao"}
        priceAdult={5000000}
        priceChild={5000000}
        quantity = {8}
        catagoryId={2}
      />
            <CardItem
        idCard={"4"}
        title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}
        image={"https://picsum.photos/800/300/?random"}
        time={"4 ngày 3 đêm"}
        date={"11/06/2023"}
        plane={"Bay khứ hồi"}
        start={"3 sao"}
        priceAdult={5000000}
        priceChild={5000000}
        quantity = {9}
        catagoryId={1}
      />
            <CardItem
        idCard={"5"}
        title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}
        image={"https://picsum.photos/800/300/?random"}
        time={"4 ngày 3 đêm"}
        date={"11/06/2023"}
        plane={"Bay khứ hồi"}
        start={"3 sao"}
        priceAdult={5000000}
        priceChild={5000000}
        quantity = {12}
        catagoryId={2}
      />
            <CardItem
        idCard={"6"}
        title={"PHÚ QUỐC | THỊ TRẤN HOÀNG HÔN SUNSET TOWN"}
        image={"https://picsum.photos/800/300/?random"}
        time={"4 ngày 3 đêm"}
        date={"11/06/2023"}
        plane={"Bay khứ hồi"}
        start={"3 sao"}
        priceAdult={5000000}
        priceChild={5000000}
        quantity = {5}
        catagoryId={1}
      />
    </div>
  )
}
