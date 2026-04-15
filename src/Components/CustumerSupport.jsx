import React from 'react'

export default function CUstumerSupport() {
    return (
        <>
            <section id="featured-departments" className="featured-departments section">
                <div className="container" >
                    <div className="emergency-banner" data-aos="fade-up" data-aos-delay="400">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="emergency-content">
                                    <h3>Emergency Services Available 24/7</h3>
                                    <p>Our emergency department is equipped with state-of-the-art technology and staffed by board-certified
                                        emergency physicians ready to provide immediate care.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <a href="tel:+15551234567" className="emergency-btn">
                                    <i className="bi bi-telephone-fill"></i>
                                    Call Emergency: (875) 580-7621
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
