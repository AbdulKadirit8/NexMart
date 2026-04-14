import Breadcrum from "../Components/Breadcrum";

export default function ContactUsPage() {
    return (
        <>
            <Breadcrum pageTitle={"Contact Us"} pageDescription={"Get in touch with NexMart for any questions, support, feedback, or business inquiries. Our Contact Us page makes it easy to reach our team for fast, friendly, and reliable assistance anytime."} />

            <section id="contact" className="contact section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="contact-info-wrapper">
                                <div className="contact-info-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="info-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="info-content">
                                        <h3>Our Address</h3>
                                        <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                                    </div>
                                </div>

                                <div className="contact-info-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="info-icon">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="info-content">
                                        <h3>Email Address</h3>
                                        <p>info@example.com</p>
                                        <p>contact@example.com</p>
                                    </div>
                                </div>

                                <div className="contact-info-item" data-aos="fade-up" data-aos-delay="300">
                                    <div className="info-icon">
                                        <i className="bi bi-headset"></i>
                                    </div>
                                    <div className="info-content">
                                        <h3>Hours of Operation</h3>
                                        <p>Sunday-Fri: 9 AM - 6 PM</p>
                                        <p>Saturday: 9 AM - 4 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form-card" data-aos="fade-up" data-aos-delay="200">
                                <h2>Send us a Message</h2>
                                <p className="mb-4">Have questions or want to learn more? Reach out to us and our team will get back to you
                                    shortly.</p>

                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                                        </div>

                                        <div className="col-md-6">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                                required />
                                        </div>

                                        <div className="col-12">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                                                required />
                                        </div>

                                        <div className="col-12">
                                            <textarea className="form-control" name="message" id="message" placeholder="Your Message" rows="6"
                                                required=""></textarea>
                                        </div>

                                        <div className="col-12">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid map-container" data-aos="fade-up" data-aos-delay="200">
                    <div className="map-overlay"></div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d820.2583886248559!2d77.68200162153674!3d29.470354431660887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1776197475936!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </section>
        </>
    )
}
