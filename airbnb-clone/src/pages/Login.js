import React, {useState} from "react";
import Navbar from "../components/Navbar";
import "../styles/login.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = () => {
    return (
        <>
            <title>Đăng nhập</title>
            <Navbar/>
            <div className="container2">
                <div className="wrapper">
                    <div className="title">Tạo tài khoản</div>
                    <Form className="formLogin">
                        <Form.Group className="inputValue" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="inputValue" controlId="formBasicEmail">
                            <Form.Control type="password" name='password' placeholder="Mật khẩu"/>
                        </Form.Group>
                        <Button variant="primary" className='buttonLogin' type="submit">
                            Đăng nhập
                        </Button>
                    </Form>
                    <div className="linktext">
                        <a href="/login" className="link">Quên mật khẩu</a>
                        <a href="/register" className="link">Tạo tài khoản mới</a>
                    </div>
                </div>
            </div>
        </>
    )
}

