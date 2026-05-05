import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useSetting from '../hooks/useSetting'

export default function Navbar() {
    const settingData=useSetting()

    let [showMenu, setShowMenu] = useState(false)
   
    return (
        <>
            <header id="header" className={`header fixed-top ${showMenu ? 'mobile-nav-active' : ''}`}>

                <div className="topbar d-flex align-items-center dark-background">
                    <div className="container d-flex justify-content-center justify-content-md-between justify-content-around">
                        <div className="contact-info d-flex align-items-center">
                            <NavLink to={`http://wa.me/${settingData.whatsapp}`} target='_blank' className="text-light d-flex">
                                <i className="bi bi-whatsapp me-2 ms-2"></i>
                                <span className='text-light d-none d-lg-block me-2'>{settingData.whatsapp}</span>
                            </NavLink>

                            <NavLink to={settingData.map1} target='_blank' className="text-light d-flex">
                                <i className="bi bi-geo-alt-fill me-2 ms-2"></i>
                                <span className='text-light d-none d-lg-block me-2'>{settingData.address}</span>
                            </NavLink>

                            <NavLink to={`mailto:${settingData.email}`} className="d-flex">
                                <i className="bi bi-envelope me-2 ms-2"></i>
                                <span className='text-light d-none d-lg-block me-2'>{settingData.email}</span>
                            </NavLink>

                            <NavLink to={`tel:${settingData.phone}`} className="d-flex">
                                <i className="bi bi-telephone me-2 ms-2"></i>
                                <span className='text-light d-none d-lg-block'>{settingData.phone}</span>
                            </NavLink>



                        </div>
                        <div className="social-links  d-flex align-items-center">

                            <NavLink to={settingData.twitter} target='_blank' className="text-light"><i className="bi bi-twitter"></i></NavLink>
                            <NavLink to={settingData.facebook} target='_blank' className="text-light"><i className="bi bi-facebook"></i></NavLink>
                            <NavLink to={settingData.instagram} target='_blank' className="text-light"><i className="bi bi-instagram"></i></NavLink>
                            <NavLink to={settingData.linkedin} target='_blank' className="text-light"><i className="bi bi-linkedin"></i></NavLink>
                            <NavLink to={settingData.youtube} target='_blank' className="text-light"><i className="bi bi-youtube"></i></NavLink>

                        </div>
                    </div>
                </div>
                <div className="branding d-flex align-items-cente">

                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <NavLink to="/" className="logo d-flex align-items-center">
                            {/* <img src="assets/img/nexmartlogo2.png" alt="" style={{ maxHeight: "30px", width: "auto" }}></img> */}
                            <img src="/assets/img/favicon.png" alt="a" className='mb-3' style={{ width: '50px' }} /><h1 className="sitename sitename-logo fs-2">{settingData.siteName}</h1>
                        </NavLink>

                        <nav id="navmenu" className="navmenu">
                            <ul>
                                <li><NavLink to="/" onClick={() => setShowMenu(!showMenu)}>Home</NavLink></li>
                                <li><NavLink to="/admin" onClick={() => setShowMenu(!showMenu)}>Admin</NavLink></li>
                                <li><NavLink to="/about" onClick={() => setShowMenu(!showMenu)}>About</NavLink></li>
                                <li><NavLink to="/shop" onClick={() => setShowMenu(!showMenu)}>Shop</NavLink></li>
                                <li><NavLink to="/feature" onClick={() => setShowMenu(!showMenu)}>Features</NavLink></li>
                                <li><NavLink to="faq" onClick={() => setShowMenu(!showMenu)}>Faq</NavLink></li>
                                <li><NavLink to="/testomonials" onClick={() => setShowMenu(!showMenu)}>Tesmonials</NavLink></li>
                                <li><NavLink to="/contactus" onClick={() => setShowMenu(!showMenu)}>ContactUs</NavLink></li>
                                <li className="dropdown"><Link to="#"><span>Abdul Kadir</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                    <ul>
                                        <li><Link to="profile?option=Profile">Profile</Link></li>
                                        <li><Link to="profile?option=Wishlist">Wishlist</Link></li>
                                        <li><Link to="profile?option=Orders">Orders</Link></li>
                                        <li><Link to="profile?option=Address">Address</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/terms">Terms</Link></li>
                                        <li><Link to="/privacy-policy">Privacy</Link></li>

                                        <li><i className='bi bi-power ms-3 text-danger'></i><button className='btn text-danger'>Logout</button></li>

                                        {/* <li><NavLink to="/404">404</NavLink></li> */}
                                    </ul>
                                </li>
                            </ul>
                            <i className={`mobile-nav-toggle d-xl-none bi ${showMenu ? 'bi-x-square' : 'bi-view-list'}`} onClick={() => setShowMenu(!showMenu)}></i>
                        </nav>

                    </div>

                </div>
            </header>
        </>
    )
}
