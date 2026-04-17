import React from 'react'
import AdminSlider from '../../Components/Admin/AdminSlider'

export default function AdminHomePage() {
    return (
        <>
            <section id="hero" className="hero section pb-0">

                <div className="container my-3 admin">

                    <div className="row ">

                        <div className="col-md-3">
                            <div data-aos="fade-right" data-aos-delay="100">
                                <AdminSlider />
                            </div>

                        </div>
                        <div className="col-md-9">
                            <div data-aos="fade-left" data-aos-delay="100">
                                <h4 className='bg-primary text-light text-center p-1'>Your Profile</h4>
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>Abdul Kadir</td>
                                        </tr>
                                        <tr>
                                            <th>UserName</th>
                                            <td>Abdul</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>abdulkadir.it8@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>8755807621</td>
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td>Super Admin</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
