import React from 'react'
import AdminSlider from '../../Components/Admin/AdminSlider'
import { Link } from 'react-router-dom'

export default function AdminMainCategoryagePage() {
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
                                <h4 className='bg-primary text-light text-center p-1'>Maincategory <Link to='/admin/maincategory/create'  title='Create'><i className='bi bi-plus text-light float-end'></i></Link></h4>
                                
                            </div>

                        </div>
                    </div>
                </div>

            </section>
    </>
  )
}
