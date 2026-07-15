import About from '../Components/About'
import Feature from '../Components/Feature'
import CustumerSupport from '../Components/CustumerSupport'
import Products from '../Components/Products'
import Testimonial from '../Components/Testimonial'
import useSetting from '../hooks/useSetting'
import ProductSlider from '../Components/ProductSlider'

import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMaincategory } from '../Redux/ActionCreaters/MaincategoryActionCreaters'
import { getProduct } from '../Redux/ActionCreaters/ProductActionCreaters'
import { useEffect } from 'react'


export default function Home() {
  const settingData = useSetting()

  let maincategoryStateData = useSelector(state => state.maincategoryStateData)
  let productStateData = useSelector(state => state.productStateData)
  let dispatch = useDispatch()

  useEffect(() => {
    (() => dispatch(getProduct()))()
  }, [productStateData.length])

  useEffect(() => {
    (() => dispatch(getMaincategory()))()
  }, [maincategoryStateData.length])

  return (
    <>
      {/* Hero Section  */}
      <section id="hero" className="hero section pb-0">

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content mt-3">
                <div
                  className="trust-badges mb-4 mt-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="badge-item">
                    <i className="bi bi-shield-check"></i>
                    <span>Secure Payment</span>
                  </div>
                  <div className="badge-item">
                    <i className="bi bi-truck"></i>
                    <span>Fast Delivery</span>
                  </div>
                  <div className="badge-item">
                    <i className="bi bi-star-fill"></i>
                    <span>4.9/5 Rating</span>
                  </div>
                </div>

                <h1 data-aos="fade-right" data-aos-delay="300" className='fs-1'>
                  {settingData.siteName} <span className="highlight">Smart Shopping</span> Starts Here, You Can Trust at <img src={settingData.logoIcon} alt="LogoIcon" className='mb-3 mt-2' style={{ width: '40px' }} /> {settingData.siteName}

                </h1>

                <p className="hero-description" data-aos="fade-right" data-aos-delay="400">
                  From everyday essentials to premium products, {settingData.siteName} brings everything together in one convenient destination. Shop with confidence, save more, and enjoy hassle-free delivery right to your doorstep.
                </p>

                {/* <div className="hero-stats mb-4" data-aos="fade-right" data-aos-delay="500">
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
                </div> */}
                <div className="hero-stats mb-41">
                  <div className="stat-item">
                    <h3>100K+</h3>
                    <p>Orders Delivered</p>
                  </div>

                  <div className="stat-item">
                    <h3>50K+</h3>
                    <p>Products Available</p>
                  </div>

                  <div className="stat-item">
                    <h3>99.9%</h3>
                    <p>Customer Satisfaction</p>
                  </div>
                </div>

                {/* <div className="hero-actions" data-aos="fade-right" data-aos-delay="600">
                  <NavLink to="appointment.html" className="btn btn-primary">Book Appointment</NavLink>
                  <NavLink to="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn btn-outline glightbox">
                    <i className="bi bi-play-circle me-2"></i>
                    Watch Our Story
                  </NavLink>
                </div> */}

                <div className="hero-actions mt-2" data-aos="fade-right" data-aos-delay="600">
                  <NavLink to="/shop" className="btn btn-primary me-2">
                    Explore Products
                  </NavLink>

                  <NavLink to="/offers" className="btn btn-outline-primary">
                    <i className="bi bi-tags me-2"></i>
                    View Deals
                  </NavLink>
                </div>


                <div className="emergency-contact" data-aos="fade-right" data-aos-delay="700">
                  <div className="emergency-icon">
                    <Link to={`tel:${settingData.phone}`}><i className="bi bi-telephone-fill text-light"></i></Link>
                  </div>
                  <div className="emergency-info">
                    <strong>Costumer Support - </strong>
                    <strong className='text-primary'>{settingData.phone}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual" data-aos="fade-left" data-aos-delay="400">
                <div className="main-image">
                  <img src="assets/images/mixeproductmain.png" alt="Modern Healthcare Facility" className="img-fluid" />

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
                      <small>10, 328 Reviews</small>
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
      <Products />
      <About />
      <Feature />
      <CustumerSupport />
      {
        maincategoryStateData.filter(x => x.status).map((item, index) => {
          let data = productStateData.filter(x => x.status && x.maincategory === item.name)
          if (data.length) {
            return <ProductSlider key={index} maincategory={item.name} data={data} />
          }
        })
      }
      <Testimonial />
    </>
  )
}
