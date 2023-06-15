import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { Home } from "@material-ui/icons";
import { IconCart } from "./IconCart";
import logo from "../data/imgs/logo_travel.png";
import { AccountCircle, ExpandMore, ShoppingCart, Menu} from '@material-ui/icons'

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  const handleIsUser = () => {
    setIsUser(!isUser);
  };

  return (
      <div className="navbar">
        <div className="container container-nav">
          <div className="nav-left">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-center">
            <div className="item">
              <Link to={"/category/trong-nuoc"}>Trong nước</Link>
            </div>
            <div className="item">
              <Link to={"/category/trong-ngoai"}>Nước ngoài</Link>
            </div>
            <div className="item">
              <Link to={"/category/tour-hot"}>Tour hot</Link>
            </div>
          </div>
          <div className="nav-right">
            <div className="item container-user">
              <AccountCircle className='icon icon-user'/>
              <span className="text">Tài khoản</span>
              <ExpandMore className="icon" />

              <div className="content">
                <Link to={"/login"} className="button-login">
                  <button>Đăng nhập</button>
                </Link>
                <div>Chưa có tài khoản? <Link to={"/register"}>Đăng ký</Link> ngay</div>
              </div>
            </div>
            <div className="item">
              <Link className="text-reset me-3" to={"/cart"}>
                <IconCart />
              </Link>
             
            </div>
          </div>
          <div className="container-menu">
            <Menu className="icon"/>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
