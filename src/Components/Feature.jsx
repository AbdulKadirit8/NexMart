import React from 'react'

export default function Feature() {
    return (
        <>
            <section id="featured-departments" className="featured-departments section pb-0">

                {/*  Section Title  */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Featured Departments</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row g-5">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="department-highlight">
                                <div className="highlight-icon">
                                    <i className="bi bi-shield-plus"></i>
                                </div>
                                <h4>Orthopedic Surgery</h4>
                                <p>Comprehensive musculoskeletal care utilizing advanced arthroscopic techniques and joint replacement
                                    procedures.</p>
                                <ul className="highlight-list">
                                    <li>Sports Medicine</li>
                                    <li>Joint Replacement</li>
                                    <li>Spine Surgery</li>
                                </ul>
                                <a href="department-details.html" className="highlight-cta">Learn More</a>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="department-highlight">
                                <div className="highlight-icon">
                                    <i className="bi bi-people"></i>
                                </div>
                                <h4>Pediatric Care</h4>
                                <p>Child-centered healthcare services from newborn to adolescence with family-focused treatment
                                    approaches.</p>
                                <ul className="highlight-list">
                                    <li>Neonatal Intensive Care</li>
                                    <li>Developmental Pediatrics</li>
                                    <li>Pediatric Surgery</li>
                                </ul>
                                <a href="department-details.html" className="highlight-cta">Learn More</a>
                            </div>
                        </div>
                        

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="department-highlight">
                                <div className="highlight-icon">
                                    <i className="bi bi-activity"></i>
                                </div>
                                <h4>Cancer Treatment</h4>
                                <p>Multidisciplinary oncology program offering personalized cancer care with latest therapeutic
                                    innovations.</p>
                                <ul className="highlight-list">
                                    <li>Precision Medicine</li>
                                    <li>Immunotherapy</li>
                                    <li>Radiation Oncology</li>
                                </ul>
                                <a href="department-details.html" className="highlight-cta">Learn More</a>
                            </div>
                        </div>
                        

                    </div>

                    

                </div>
            </section>
        </>
    )
}
