import { Link, NavLink } from "react-router-dom"
import useSetting from "../hooks/useSetting"

export default function Footer() {
 const settingData=useSetting()
  function stopReload(e){
    e.preventDefault()
    e.target.form.reset()
  }
  
  return (
    <>
      <footer id="footer" className="footer-16 footer position-relative bg-dark">

        <div className="container">

          <div className="footer-main" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-start">

              <div className="col-lg-5">
                <div className="brand-section">
                  <Link to="/" className="logo d-flex align-items-center mb-4">
                    <span className="sitename">{settingData.siteName}</span>
                  </Link>
                  <p className="text-light">{settingData.siteName} is your trusted online shopping destination offering quality products, affordable prices, and a smooth shopping experience. We focus on customer satisfaction, secure payments, fast delivery, and reliable service. Our goal is to make everyday shopping simple, smart, and convenient for everyone.</p>

                  <div className="contact-info mt-3">
                    <div className="contact-item">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settingData.address)}`} target="_blank">
                        <i className="text-light bi bi-globe-central-south-asia"></i>
                        <span>{settingData.address}</span>
                      </a>
                    </div>
                    <div className="contact-item">
                      <a href={`tel:${settingData.phone}`} target="_blank">
                        <i className="text-light bi bi-telephone"></i>
                        <span>{settingData.phone}</span>
                      </a>
                    </div>
                    <div className="contact-item">
                      <a href={`mailto:${settingData.email}?subject=Inquiry&body=Hello ${settingData.siteName}`} target="_blank">
                        <i className="text-light bi bi-envelope"></i>
                        <span>{settingData.email}</span>
                      </a>
                    </div>
                    <div className="contact-item">
                      <a href={`https://wa.me/91${settingData.whatsapp}?text=Hello%20${settingData.siteName}%20I%20am%20interested`} target="_blank">
                        <i className="text-light bi bi-whatsapp"></i>
                        <span>{settingData.whatsapp}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="footer-nav-wrapper">
                  <div className="row">

                    <div className="col-md-3 col-6">
                      <div className="nav-column">
                        <h6 className="text-light">Quick Link</h6>
                        <nav className="footer-nav">
                          <Link to="/" >Home</Link>
                          <Link to="/about">About</Link>
                          <Link to="/shop">Shop</Link>
                          <Link to="/feature">Features</Link>
                          <Link to="/contactus">ContactUs</Link>

                        </nav>
                      </div>
                    </div>

                    <div className="col-md-3 col-6">
                      <div className="nav-column">
                        <h6 className="text-light">Important Link</h6>
                        <nav className="footer-nav">
                          <Link to="faq">Faq</Link>
                          <Link to="/testomonials">Tesmonials</Link>
                          <Link to="/terms">Term and Conditions</Link>
                          <Link to="/privacy-policy">Privacy and Policy</Link>
                        </nav>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="nav-column">
                        <h6 className="text-light">Subscribe Our Newslatter Service</h6>
                        <p className="mt-3">Subscribe to the {settingData.siteName} newsletter for the latest product updates, exclusive offers, special discounts, and shopping tips. Be the first to know about new arrivals and exciting deals delivered directly to your inbox.</p>
                        <div>
                          <form action="">
                            <div className="btn-group w-100">
                              <input type="email" name="email" placeholder="Enter your Email Address" className="w-100 ps-2 rounded-0 rounded-start" />
                              <button className="btn btn-dark border" onClick={stopReload}>Subscribe</button>
                            </div>
                          </form>
                        </div>

                        <div className="mt-4">
                          <div className="social-links  d-flex align-items-center justify-content-center">

                            <NavLink to={settingData.twitter} target='_blank' className="text-light ms-4"><i className="social-icon twitter bi bi-twitter"></i></NavLink>
                            <NavLink to={settingData.facebook} target='_blank' className="text-light ms-4"><i className="social-icon facebook bi bi-facebook"></i></NavLink>
                            <NavLink to={settingData.instagram} target='_blank' className="text-light ms-4"><i className="social-icon instagram bi bi-instagram"></i></NavLink>
                            <NavLink to={settingData.linkedin} target='_blank' className="text-light ms-4"><i className="social-icon linkedin bi bi-linkedin"></i></NavLink>
                            <NavLink to={settingData.youtube} target='_blank' className="text-light ms-4"><i className="social-icon youtube bi bi-youtube"></i></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="footer-bottom border-top" style={{marginTop:-80}}>
          <div className="container">
            <div className="bottom-content" data-aos="fade-up" data-aos-delay="30">
              <div className="row align-items-center">

                <div className="col-lg-4">
                  <div className="copyright">
                    <p>© <span className="sitename">{settingData.siteName}</span>. All rights reserved.</p>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="legal-links">
                      <Link to="faq">Faq</Link>
                      <Link to="/testomonials">Tesmonials</Link>
                      <Link to="/terms">Term and Conditions</Link>
                      <Link to="/privacy-policy">Privacy and Policy</Link>
                    <div className="credits">

                      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>. Distributed by @<Link to="https://themewagon.com" target="_blank" className="text-primary">Abdul Kadir</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
