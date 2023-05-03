import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
const Navbar = () => {
    const [isUser, setIsUser] = useState(false)
    const handleIsUser = () => {
        setIsUser(!isUser)
    }

  return (
    <>
        <div>
        <div className="p-3 text-center bg-white border-bottom">
            <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <a href="#!" className="ms-md-2">
                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
                </a>
                </div>
                <div className="col-md-4">
                <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                    <input autocomplete="off" type="search" className="form-control rounded" placeholder="Search" />
                    <span className="input-group-text border-0 d-none d-lg-flex bg-info"><i className="fas fa-search text-white"></i></span>
                </form>
                </div>
                <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                <div className="d-flex">
                    <Link className="text-reset me-3" to={"/cart"}>
                        <span><i className="fas fa-shopping-cart"></i></span>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                    </Link>

                    <div className="dropdown">
                    <div className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow"
                        role="button">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
                        alt="" loading="lazy" 
                        onClick={()=> handleIsUser()}
                        />
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light text-white">
            <div className="container justify-content-center justify-content-md-between">
            <ul className="navbar-nav flex-row">
                <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block ms-3">
                    <Link className="nav-link" to={"#"}><div className='link-top'>Tour trong nước</div></Link>
                </li>
                <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                    <Link className="nav-link" to={"#"}><div className='link-top'>Tour nước ngoài</div></Link>
                </li>
            </ul>
            </div>
        </nav> 
        {/* <div id="sidenav-1" className="sidenav" role="navigation" data-mdb-hidden="true" data-mdb-accordion="true">
            <ul className="sidenav-menu">
            <li className="sidenav-item">
                <a className="sidenav-link"><i className="fas fa-layer-group pe-3"></i><span>Categories</span></a>
                <ul className="sidenav-collapse show">
                <li className="sidenav-item">
                    <a className="sidenav-link">Dresses</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Shirts</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Jeans</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Shoes</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Accessories</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Jewelry</a>
                </li>
                </ul>
            </li>
            <li className="sidenav-item">
                <a className="sidenav-link"><i className="fas fa-gem pe-3"></i><span>Brands</span></a>
                <ul className="sidenav-collapse">
                <li className="sidenav-item">
                    <a className="sidenav-link">Brand 1</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Brand 2</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Brand 3</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Brand 4</a>
                </li>
                </ul>
            </li>
            <li className="sidenav-item">
                <a className="sidenav-link"><i className="fas fa-gift pe-3"></i><span>Discounts</span></a>
                <ul className="sidenav-collapse">
                <li className="sidenav-item">
                    <a className="sidenav-link">-70%</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">-50%</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Any</a>
                </li>
                </ul>
            </li>
            <li className="sidenav-item">
                <a className="sidenav-link"><i className="fas fa-fire-alt pe-3"></i><span>Popular</span></a>
                <ul className="sidenav-collapse">
                <li className="sidenav-item">
                    <a className="sidenav-link">Jewelry</a>
                </li>
                <li className="sidenav-item">
                    <a className="sidenav-link">Snickers</a>
                </li>
                </ul>
            </li>
            <li className="sidenav-item">
                <a className="sidenav-link"><i className="fab fa-hotjar pe-3"></i><span>Today's bestseller</span></a>
                <div className="card mx-3">
                <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
                    className="w-100" />
                    <a href="#!">
                    <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-danger ms-2">-10%</span></h5>
                        </div>
                    </div>
                    <div className="hover-overlay">
                        <div className="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                    </div>
                    </a>
                </div>
                <div className="card-body">
                    <a href="" className="text-reset">
                    <p className="mb-2">Pink snickers</p>
                    </a>
                    <p className="mb-0">
                    <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
                    </p>
                </div>
                </div>
            </li>
            </ul>
        </div>
        {/* <div id="intro"
            className="bg-image shadow-1-strong"
            style="background-image: url(https://mdbootstrap.com/img/new/slides/310.jpg); height: 500px;">
            <div className="mask text-white" style="background-color: rgba(0, 0, 0, 0.6)">
            <div className="container d-flex align-items-center justify-content-center text-center h-100">
                <div className="text-white">
                <h1 className="mb-3">Autumn sale</h1>
                <h4 className="mb-4">Promotions up to 70%!</h4>
                <a className="btn btn-outline-light btn-lg mb-3" href="#!" role="button">See the promotional offer
                    <i className="fas fa-gem ms-1"></i>
                </a>
                </div>
            </div>
            </div>
        </div> */}
        </div>
    </>
  )
}

export default Navbar

