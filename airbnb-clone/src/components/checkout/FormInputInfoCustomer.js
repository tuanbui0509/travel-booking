import React from "react";

export const FormInputInfoCustomer = (prop) => {
    const forms = []
    const quantity = prop.cart.quantityAdult + prop.cart.quantityChild;
    console.log(prop.cart)
    for (let i = 1; i <= quantity; i++) {
        forms.push(
            <React.Fragment key={i}>
            <h3 key={i}className='mt-1'>Thông tin khách hàng #{i}</h3>
            <div  className='row'>
                <div className="col-md-6 mt-1">
                    <div className="form-group">
                        <label>Tên (<span className="text-danger">*</span>):</label>
                        <input type="text" className="form-control" id="name" placeholder="Nhập tên" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Nhập email" />
                    </div>

                    {
                        prop.cart.tour.catagoryId === 2 ?
                            <div className="form-group">
                                <label>
                                    Số hộ chiếu(<span className="text-danger">*</span>){" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="passport"
                                    placeholder="Nhập số hộ chiếu"
                                />
                            </div>

                            :""
                    }
                </div>
                <div className='col-md-6 mt-1'>
                    <div className="form-group">
                        <label>Số điện thoại:</label>
                        <input type="number" className="form-control" id="phone" placeholder="Nhập số điện thoại"/>
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ:</label>
                        <input type="text" className="form-control" id="name" placeholder="Nhập địa chỉ" />
                    </div>
                    {
                        prop.cart.tour.catagoryId === 2?
                            <div className="form-group">
                                <label>Quốc tịch</label>
                                <input type="text" className="form-control" id="national" />
                            </div>
                            :""
                    }
                </div>
            </div>
            </React.Fragment>
        );
    }
    return <>{forms}</>;
}