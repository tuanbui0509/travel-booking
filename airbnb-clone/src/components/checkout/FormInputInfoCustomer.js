export const FormInputInfoCustomer = (prop) => {
    const forms = []
    for (let i = 1; i <= prop.quantity; i++) {
        forms.push(
            <>

            <h3 className='mt-1'>Thông tin khách hàng #{i}</h3>
            <div key={i} className='row'>
                <div className="col-md-6 mt-1">
                    <div className="form-group">
                        <label>Tên:</label>
                        <input type="text" className="form-control" id="name" placeholder="Nhập tên của bạn" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Nhập email của bạn" />
                    </div>
                    <div className="form-group">
                        <label>Thành phố:</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                </div>
                <div className='col-md-6 mt-1'>
                    <div className="form-group">
                        <label>Số điện thoại:</label>
                        <input type="number" className="form-control" id="phone" />
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ:</label>
                        <input type="text" className="form-control" id="name" placeholder="Nhập tên của bạn" />
                    </div>
                    <div className="form-group">
                        <label>Quốc gia:</label>
                        <input type="email" className="form-control" id="email" placeholder="" />
                    </div>
                </div>
            </div>
            </>
        );
    }
    return <>{forms}</>;
}