import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    let [settingData, setSettingData]=useState({
        siteName:import.meta.env.VITE_APP_SITENAME,
        phone:import.meta.env.VITE_APP_PHONE,
        whatsapp:import.meta.env.VITE_APP_SITENAME,
        email:import.meta.env.VITE_APP_EMAIL
    })
    return (
        <>
            <header id="header" className="header fixed-top">

                <div className="topbar d-flex align-items-center dark-background">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope d-flex align-items-center">
                                <NavLink to={`mailto:${settingData.email}`} target='_blank' className="d-none d-xl-block">{settingData.email}</NavLink>
                            </i>
                            
                            <i className="bi bi-telephone d-flex align-items-center ms-4"><NavLink
                                to={`tel:${settingData.phone}`} target='_blank' className="d-none d-xl-block">{settingData.phone}</NavLink></i>
                        </div>
                        <div className="social-links  d-flex align-items-center">
                            <NavLink to={settingData.email} target='_blank' className="text-light"><i className="bi bi-geo-alt-fill"></i></NavLink>
                            <NavLink to={settingData.email} target='_blank' className="text-light"><i className="bi bi-twitter"></i></NavLink>
                            <NavLink to={settingData.email} target='_blank' className="text-light"><i className="bi bi-facebook"></i></NavLink>
                            <NavLink to={settingData.email} target='_blank' className="text-light"><i className="bi bi-instagram"></i></NavLink>
                            <NavLink to={settingData.email} target='_blank' className="text-light"><i className="bi bi-linkedin"></i></NavLink>
                            <NavLink to={settingData.email} target='_blank' className="text-light"><i className="bi bi-whatsapp"></i></NavLink>
                            <NavLink to={settingData.email} target='_blank' className="text-light"><i className="bi bi-youtube"></i></NavLink>
                        </div>
                    </div>
                </div>
                <div className="branding d-flex align-items-cente">

                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <NavLink to="/" className="logo d-flex align-items-center">
                            <img src="assets/img/nexmartlogo2.png" alt="" style={{ maxHeight: "50px", width: "auto" }}></img>
                            {/* <h1 className="sitename">NexMmart</h1> */}
                        </NavLink>

                        <nav id="navmenu" className="navmenu">
                            <ul>
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="departments.html">Departments</NavLink></li>
                                <li><NavLink to="services.html">Services</NavLink></li>
                                <li><NavLink to="doctors.html">Doctors</NavLink></li>
                                <li className="dropdown"><NavLink to="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
                                    <ul>
                                        <li><NavLink to="department-details.html">Department Details</NavLink></li>
                                        <li><NavLink to="service-details.html">Service Details</NavLink></li>
                                        <li><NavLink to="appointment.html">Appointment</NavLink></li>
                                        <li><NavLink to="/testomonials">Testimonials</NavLink></li>
                                        <li><NavLink to="/faq">Frequently Asked Questions</NavLink></li>
                                        <li><NavLink to="gallery.html">Gallery</NavLink></li>
                                        <li><NavLink to="/terms">Terms</NavLink></li>
                                        <li><NavLink to="/privacy-policy">Privacy</NavLink></li>
                                        {/* <li><NavLink to="/404">404</NavLink></li> */}
                                    </ul>
                                </li>
                                <li className="dropdown"><NavLink to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
                                    <ul>
                                        <li><NavLink to="#">Dropdown 1</NavLink></li>
                                        <li className="dropdown"><NavLink to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
                                            <ul>
                                                <li><Link to="#">Deep Dropdown 1</Link></li>
                                                <li><Link to="#">Deep Dropdown 2</Link></li>
                                                <li><Link to="#">Deep Dropdown 3</Link></li>
                                                <li><Link to="#">Deep Dropdown 4</Link></li>
                                                <li><Link to="#">Deep Dropdown 5</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Dropdown 2</Link></li>
                                        <li><Link to="#">Dropdown 3</Link></li>
                                        <li><Link to="#">Dropdown 4</Link></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/contactus">Contact</NavLink></li>
                            </ul>
                            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                        </nav>

                    </div>

                </div>

            </header>
        </>
    )
}
