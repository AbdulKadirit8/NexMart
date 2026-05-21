
import Breadcrum from '../Components/Breadcrum'
import { NavLink } from 'react-router-dom'
import useSetting from '../hooks/useSetting'

export default function TermPage() {
     const settingData=useSetting()
    
    return (
        <>
            {/* <Breadcrum pageTitle={"Term and Conditions"} pageDescription={`By using ${settingData.siteName}, you agree to our terms and conditions designed to ensure a safe, fair, and reliable shopping experience. Please review our policies, user responsibilities, and service guidelines carefully.`} /> */}

            <section id="terms-of-service" className="terms-of-service section mt-5">

                <div className="container" data-aos="fade-up">

                    <div className="tos-header text-center" data-aos="fade-up">
                        <span className="last-updated">Last Updated: February 27, 2025</span>
                        <h2>Terms of Service</h2>
                        <p>Please read these terms of service carefully before using our services</p>
                    </div>

                    <div className="tos-content" data-aos="fade-up" data-aos-delay="200">

                        <div id="agreement" className="content-section">
                            <h3>1. Agreement to Terms</h3>
                            <p>By accessing the {settingData.siteName} website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our services.
                            </p>
                            <div className="info-box">
                                <i className="bi bi-info-circle"></i>
                                <p>These terms apply to all users, customers, visitors, and others who access or use our platform.</p>
                            </div>
                        </div>

                        <div id="intellectual-property" className="content-section">
                            <h3>2. Intellectual Property Rights</h3>
                            <p>All content, branding, logos, text, graphics, designs, features, and functionality available on {settingData.siteName} are owned by us and protected by copyright, trademark, and other intellectual property laws.</p>
                            <ul className="list-items">
                                <li>All website content is our exclusive property</li>
                                <li>You may not copy, reproduce, or modify any content</li>
                                <li>Our trademarks may not be used without written permission</li>
                                <li>Content is for personal, non-commercial use only</li>
                            </ul>
                        </div>

                        <div id="user-accounts" className="content-section">
                            <h3>3. User Accounts</h3>
                            <p>When creating an account on {settingData.siteName}, you must provide accurate, complete, and updated information. Providing false or misleading details may result in suspension or termination of your account.</p>
                            <div className="alert-box">
                                <i className="bi bi-exclamation-triangle"></i>
                                <div className="alert-content">
                                    <h5>Important Notice</h5>
                                    <p>You are responsible for maintaining the confidentiality of your password and for all activities under your account.</p>
                                </div>
                            </div>
                        </div>

                        <div id="prohibited" className="content-section">
                            <h3>4. Prohibited Activities</h3>
                            <p>You may not use {settingData.siteName} for any unlawful or unauthorized purpose.</p>
                            <div className="prohibited-list">
                                <div className="prohibited-item">
                                    <i className="bi bi-x-circle"></i>
                                    <span>Attempting unauthorized access to our systems</span>
                                </div>
                                <div className="prohibited-item">
                                    <i className="bi bi-x-circle"></i>
                                    <span>Uploading harmful, fraudulent, or malicious content</span>
                                </div>
                                <div className="prohibited-item">
                                    <i className="bi bi-x-circle"></i>
                                    <span>Copying or scraping website data systematically</span>
                                </div>
                                <div className="prohibited-item">
                                    <i className="bi bi-x-circle"></i>
                                    <span>AMisusing services or interfering with website operations</span>
                                </div>
                            </div>
                        </div>

                        <div id="disclaimer" className="content-section">
                            <h3>5. Disclaimers</h3>
                            <p>Your use of {settingData.siteName} is at your own risk. All services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.</p>
                            <div className="disclaimer-box">
                                <p>We do not guarantee that:</p>
                                <ul>
                                    <li>The service will always meet your expectations</li>
                                    <li>The website will be uninterrupted or error-free</li>
                                    <li>Product information will always be fully accurate</li>
                                    <li>All technical issues will be corrected immediately</li>
                                </ul>
                            </div>
                        </div>

                        <div id="limitation" className="content-section">
                            <h3>6. Limitation of Liability</h3>
                            <p>{settingData.siteName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website, products, or services.</p>
                        </div>

                        <div id="indemnification" className="content-section">
                            <h3>7. Indemnification</h3>
                            <p>You agree to defend, indemnify, and hold {settingData.siteName} harmless from any claims, damages, losses, liabilities, and expenses arising from your misuse of the platform or violation of these Terms.</p>
                        </div>

                        <div id="termination" className="content-section">
                            <h3>8. Termination</h3>
                            <p>We reserve the right to suspend or terminate your account or access to our services at any time, without prior notice, if you violate these Terms or engage in harmful activities.</p>
                        </div>

                        <div id="governing-law" className="content-section">
                            <h3>9. Governing Law</h3>
                            <p>These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles.</p>
                        </div>

                        <div id="changes" className="content-section">
                            <h3>10. Changes to Terms</h3>
                            <p>We reserve the right to update, modify, or replace these Terms at any time. Changes will be effective immediately after posting on this page.</p>
                            <div className="notice-box">
                                <i className="bi bi-bell"></i>
                                <p>By continuing to access or use our service after those revisions become effective, you agree to be
                                    bound by the revised terms.</p>
                            </div>
                        </div>
                    </div>


                    <div className="tos-contact" data-aos="fade-up" data-aos-delay="300">
                        <div className="contact-box">
                            <div className="contact-icon">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div className="contact-content">
                                <h4>Questions About Terms?</h4>
                                <p>If you have any questions about these Terms, please contact us.</p>
                                <NavLink to="/contactus" className="contact-link">Contact Support</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
