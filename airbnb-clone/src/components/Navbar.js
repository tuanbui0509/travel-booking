import React, {useEffect, useState} from "react";
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
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleUserToggle = () => {
    setIsUserOpen(!isUserOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className={` ${scrollPosition > 15 ? 'fixed-top navbar fixed-top-nav' : 'navbar'}`}>
        <div className="container container-nav">
          <div className="nav-left">
            <Link to={'/'}><img src={logo} alt="logo" /></Link>
          </div>
          <div className="nav-center">
            <div className="item">
              <Link to={"/category/1"}>Trong nước</Link>
            </div>
            <div className="item">
              <Link to={"/category/2"}>Nước ngoài</Link>
            </div>
            <div className="item">
              <Link to={"/category/3"}>Tour hot</Link>
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
            <Menu onClick={handleMenuToggle} className="icon"/>
             <Link style={{marginLeft: '6px'}} className="text-reset me-3" to={"/cart"}>
                <IconCart />
              </Link>
          </div>
        </div>
        <ul className={`link-nav-mobile ${isMenuOpen ? '': 'd-none'}`}>
          <li className='link-tour'><Link to={"/category/1"}>Trong nước</Link></li>
          <li className='link-tour'><Link to={"/category/2"}>Nước ngoài</Link></li>
          <li className='link-tour'><Link to={"/category/3"}>Tour hot</Link></li>
          <li className='link-tour' onClick={handleUserToggle}>
            <span className="toggle-user">Tài khoản</span>
              <ExpandMore className="icon" />
              <ul className={`${!isUserOpen && 'd-none'}`}>
                <li className='link-user'><Link to={"/login"}>Đăng nhập</Link></li>
                <li className='link-user'><Link to={"/register"}>Đăng kí</Link></li>
              </ul>
          </li>
        </ul>
      </div>
  );
};

export default Navbar;
