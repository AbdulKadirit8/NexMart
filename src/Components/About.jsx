import React from 'react'
import useSetting from '../hooks/useSetting'

export default function About() {
    const settingData = useSetting()
    return (
        <>
            {/* Home About Section  */}
            <section id="home-about" className="home-about section pt-2 pb-0">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay="200">
                            <div className="about-content">
                                <h2 className="section-heading">Smart Shopping, Trusted Quality</h2>
                                <p className="lead-text text-justify">
                                    At {settingData.siteName}, we are committed to delivering a seamless and reliable online shopping experience. Our platform brings together a wide range of quality products at competitive prices, ensuring convenience, value, and satisfaction for every customer. With a focus on innovation and user experience, we make online shopping simple and efficient, while continuously improving our platform to meet evolving customer expectations.
                                </p>

                                <p className="lead-text text-justify">
                                    Our team continuously works to provide a diverse selection of products, fast delivery services, and secure payment options. From everyday essentials to trending items, {settingData.siteName} ensures that customers find everything they need in one place. We aim to build trust through quality service, transparency, and customer-first support, while maintaining consistency in product quality and delivering a smooth and enjoyable shopping journey.
                                </p>


                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <div className="about-visual mt-5">
                                <div className="main-image">
                                    <img src="assets/images/aboutus1.jpeg" alt="Modern medical facility" className="img-fluid" />
                                </div>
                                <div className="floating-card ms-3">
                                    <div className="card-content">
                                        <div className="icon">
                                            <i className="bi bi-headset"></i>
                                        </div>
                                        <div className="card-text">
                                            <h4>24/7 Customer Support</h4>
                                            <p>Always here to help you anytime</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience-badge">
                                    <div className="badge-content">
                                        <span className="years">1000+</span>
                                        <span className="text">Products Delivered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
