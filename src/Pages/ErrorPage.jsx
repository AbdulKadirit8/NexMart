import { NavLink } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum";

export default function ErrorPage() {
    return (
        <>
        <Breadcrum pageTitle={"404"} pageDescription={"Oops! The page you are looking for cannot be found. It may have been moved, deleted, or the link is incorrect. Return to NexMart and continue your shopping journey easily."} />
            <section id="error-404" className="error-404 section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">

                            <div className="error-number" data-aos="zoom-in" data-aos-delay="200">
                                404
                            </div>

                            <h1 className="error-title" data-aos="fade-up" data-aos-delay="300">
                                Page Not Found
                            </h1>

                            <p className="error-description" data-aos="fade-up" data-aos-delay="400">
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>

                            <div className="error-actions" data-aos="fade-up" data-aos-delay="500">
                                <NavLink to="/" className="btn-primary">
                                    <i className="bi bi-house"></i>
                                    Back to Home
                                </NavLink>
                                
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">

                            <div className="helpful-links" data-aos="fade-up" data-aos-delay="600">
                                <h3>You might be looking for:</h3>
                                <div className="links-grid">
                                    <NavLink to="/about" className="link-item">
                                        <i className="bi bi-info-circle"></i>
                                        <span>About Us</span>
                                    </NavLink>
                                    <NavLink to="/contactus" className="link-item">
                                        <i className="bi bi-telephone"></i>
                                        <span>Contact</span>
                                    </NavLink>
                                    <NavLink to="/feature" className="link-item">
                                        <i className="bi bi-grid-3x3-gap"></i>
                                        <span>Features</span>
                                    </NavLink>
                                    <NavLink to="/shop" className="link-item">
                                        <i className="bi bi-journal-text"></i>
                                        <span>Shop</span>
                                    </NavLink>
                                    <NavLink to="/faq" className="link-item">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Faq</span>
                                    </NavLink>
                                    <NavLink to="/privacy-policy" className="link-item">
                                        <i className="bi bi-shield-check"></i>
                                        <span>Privacy Policy</span>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
