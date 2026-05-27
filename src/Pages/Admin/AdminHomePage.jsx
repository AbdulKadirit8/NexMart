import AdminSlider from '../../Components/Admin/AdminSlider'
import Profile from '../../Components/User/Profile'
import { Link } from 'react-router-dom'

export default function AdminHomePage() {
    
    return (
        <>
            <section id="hero" className="hero section pb-0">

                <div className="container my-3 admin">
                    
                    <div className="row ">

                        <div className="col-12 col-lg-3 ">
                            <AdminSlider />
                        </div>
                        <div className="col-12 col-lg-9">
                            <div data-aos="fade-left" data-aos-delay="100">
                                <h4 className='bg-primary text-light text-center p-2 rounded'>Your Profile</h4>
                                <Profile />
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
