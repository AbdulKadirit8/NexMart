import React from 'react'
import { NavLink } from 'react-router-dom'
import About from '../Components/About'
import Feature from '../Components/Feature'
import CustumerSupport from '../Components/CustumerSupport'
import Products from '../Components/Products'
import Testimonial from '../Components/Testimonial'

export default function Home() {
  return (
    <>
     {/* Hero Section  */}
    <section id="hero" className="hero section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="trust-badges mb-4" data-aos="fade-right" data-aos-delay="200">
                <div className="badge-item">
                  <i className="bi bi-shield-check"></i>
                  <span>Accredited</span>
                </div>
                <div className="badge-item">
                  <i className="bi bi-clock"></i>
                  <span>24/7 Emergency</span>
                </div>
                <div className="badge-item">
                  <i className="bi bi-star-fill"></i>
                  <span>4.9/5 Rating</span>
                </div>
              </div>

              <h1 data-aos="fade-right" data-aos-delay="300">
                Excellence in <span className="highlight">Healthcare</span> With Compassionate Care
              </h1>

              <p className="hero-description" data-aos="fade-right" data-aos-delay="400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>

              <div className="hero-stats mb-4" data-aos="fade-right" data-aos-delay="500">
                <div className="stat-item">
                  <h3><span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="2"
                      className="purecounter"></span>+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3><span data-purecounter-start="0" data-purecounter-end="5000" data-purecounter-duration="2"
                      className="purecounter"></span>+</h3>
                  <p>Patients Treated</p>
                </div>
                <div className="stat-item">
                  <h3><span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="2"
                      className="purecounter"></span>+</h3>
                  <p>Medical Experts</p>
                </div>
              </div>

              <div className="hero-actions" data-aos="fade-right" data-aos-delay="600">
                <NavLink to="appointment.html" className="btn btn-primary">Book Appointment</NavLink>
                <NavLink to="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn btn-outline glightbox">
                  <i className="bi bi-play-circle me-2"></i>
                  Watch Our Story
                </NavLink>
              </div>

              <div className="emergency-contact" data-aos="fade-right" data-aos-delay="700">
                <div className="emergency-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="emergency-info">
                  <small>Emergency Hotline</small>
                  <strong>+1 (555) 911-2468</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual" data-aos="fade-left" data-aos-delay="400">
              <div className="main-image">
                <img src="assets/img/health/staff-10.webp" alt="Modern Healthcare Facility" className="img-fluid" />
                <div className="floating-card appointment-card">
                  <div className="card-icon">
                    <i className="bi bi-calendar-check"></i>
                  </div>
                  <div className="card-content">
                    <h6>Next Available</h6>
                    <p>Today 2:30 PM</p>
                    <small>Dr. Sarah Johnson</small>
                  </div>
                </div>
                <div className="floating-card rating-card">
                  <div className="card-content">
                    <div className="rating-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <h6>4.9/5</h6>
                    <small>1,234 Reviews</small>
                  </div>
                </div>
              </div>
              <div className="background-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    <About></About>
    <Feature></Feature>
    <CustumerSupport></CustumerSupport>
    <Products></Products>
    <Testimonial></Testimonial>
    </>
  )
}
