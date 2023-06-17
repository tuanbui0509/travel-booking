import React, {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../styles/register.scss";
import Navbar from "../components/Navbar";
export const Register = () => {

    const [username, usernamechange] = useState("");
    const [fullname, fullnamechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [password, passwordchange] = useState("");
    const [repeatPassword, repeatPasswordchange] = useState("");

    const history = useNavigate();
    const [showAlert, setAlert] = useState(false);

    const isValidate =() => {
        let isprocceed = true;
        let errmessage = '';
        if (username === null || username ==='') {
            isprocceed = false;
            errmessage = 'Vui lòng nhập username';
        }
        if (fullname === null || fullname ==='') {
            isprocceed = false;
            errmessage = 'Vui lòng nhập Họ tên';
        }
        if (email === null || email ==='') {
            isprocceed = false;
            errmessage = 'Vui lòng nhập email';
        }
        if (!email.includes("@")) {
            isprocceed = false;
            errmessage = 'Email không hợp lệ';
        }
        if (phone.length != 10) {
            isprocceed = false;
            errmessage = 'Số điện thoại phải đủ 10 số';
        }
        if (password.length < 4) {
            isprocceed = false;
            errmessage = 'Độ dài mật khẩu phải lớn hơn 4';
        }
        if (password !== repeatPassword) {
            isprocceed = false;
            errmessage = 'Mật khẩu không trùng khớp';
        }
        return isprocceed;
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        let regisObj = { username, fullname, email, phone, password, repeatPassword};
        // console.log(regisObj);

        if (isValidate()) {
            fetch("http://localhost:5000/api/users", {
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(regisObj)
            }).then((res ) => {
                history('/login')
                localStorage.setItem("users",JSON.stringify(regisObj));
            }).catch((err) => {
                toast.error( err.message + 'failed');
            });
        }
    }

    // const addData = (e) => {
    //     e.preventDefault();
    //
    //     const {username, fullname, email, phone, password, repeatPassword} = inpval;
    //     if (username === "") {
    //         toast.error('Vui lòng nhập username', {
    //             position: "top-center",
    //         });
    //     } else if (fullname === "") {
    //         toast.error('Vui lòng nhập Họ tên', {
    //             position: "top-center",
    //         });
    //     } else if (email === "") {
    //         toast.error('Vui lòng nhập email', {
    //             position: "top-center",
    //         })
    //     } else if (!email.includes("@")) {
    //         toast.error('Email không hợp lệ', {
    //             position: "top-center",
    //         })
    //     } else if (phone.length != 10) {
    //         toast.error('Số điện thoại không hợp lệ', {
    //             position: "top-center",
    //         })
    //     } else if (password.length < 7) {
    //         toast.error('Độ dài mật khẩu phải lớn hơn 7', {
    //             position: "top-center",
    //         })
    //     } else if (repeatPassword.length < 7) {
    //         toast.error('Độ dài mật khẩu phải lớn hơn 7', {
    //             position: "top-center",
    //         })
    //     } else if (password !== repeatPassword) {
    //         toast.error('Mật khẩu không trùng khớp')
    //     }
    //     else {
    //         console.log("Đăng ký thành công");
    //         history("/login")
    //         localStorage.setItem("user",JSON.stringify([...data,inpval]));
    //         fetch("http://localhost:5000/users", {
    //             method: "POST",
    //             headers: {'content-type': 'application/json'},
    //             body: JSON.stringify(inpval)
    //         }).then((res) => {
    //             toast.success('Đăng ký thành công')
    //             history('/login')
    //         }).catch((err) => {
    //             toast.error('Vui lòng nhập lại thông tin');
    //         })
    //     }
    //
    //     // if (getdata(e)) {
    //     //     fetch("http://localhost:5000/users", {
    //     //         method: "POST",
    //     //         headers: {'content-type': 'application/json'},
    //     //         body: JSON.stringify(inpval)
    //     //     }).then((res) => {
    //     //         toast.success('Đăng ký thành công')
    //     //         history('/login')
    //     //         localStorage.setItem("user",JSON.stringify([...data,inpval]));
    //     //     }).catch((err) => {
    //     //         toast.error('Vui lòng nhập lại thông tin');
    //     //     })
    //     // }
    // }
    return (
        <>
            <title>Tạo tài khoản</title>
            <Navbar/>
            <div className="container1" onSubmit={handlesubmit}>
                <div className="wrapper">
                    <div className="title">Tạo tài khoản</div>
                    <Form className="formRegister">
                        <Form.Group className="inputValue" controlId="formBasicEmail">
                            <Form.Control value={username} type="text" name='username' onChange={e=>usernamechange(e.target.value)} placeholder="Username"/>
                        </Form.Group>
                        <Form.Group className="inputValue" controlId="formBasicEmail">
                            <Form.Control value={fullname} type="text" name='fullname' onChange={e=>fullnamechange(e.target.value)} placeholder="Họ tên"/>
                        </Form.Group>
                        <Form.Group className="inputValue" controlId="formBasicEmail">
                            <Form.Control value={email} type="email" name='email' onChange={e=>emailchange(e.target.value)}  placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="inputValue" controlId="formBasicEmail">
                            <Form.Control value={phone} type="phone" name='phone' onChange={e=>phonechange(e.target.value)} placeholder="Số điện thoại"/>
                        </Form.Group>
                        <Form.Group className="inputValue" controlId="formBasicPassword">
                            <Form.Control value={password} type="password" name='password' onChange={e=>passwordchange(e.target.value)} placeholder="Mật khẩu"/>
                        </Form.Group>
                        <Form.Group className="inputValue" controlId="formBasicPassword">
                            <Form.Control value={repeatPassword} type="password" name='repeatPassword' onChange={e=>repeatPasswordchange(e.target.value)}
                                          placeholder="Nhập lại mật khẩu"/>
                        </Form.Group>
                        <span className="agreement">
                            Bằng việc đăng ký, bạn đã đồng ý với XYZ về
                            <span className="linkAgree"> Điều khoản sử dụng  </span> và
                            <span className="linkAgree"> Chính sách bảo mật</span>
                        </span>
                        <Button variant="primary" className='buttonRegis'  type="submit">
                            Tạo tài khoản
                        </Button>
                    </Form>
                    <p className="mt-3" style={{textAlign: "center"}}> Bạn đã có tài khoản ?
                        <span> <Link to = "/login">Đăng nhập</Link></span>
                    </p>
                </div>
            </div>
        </>
    )
}