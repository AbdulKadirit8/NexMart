import React, { useEffect, useState } from 'react'
import Breadcrum from '../../Components/Breadcrum'
import useSetting from '../../hooks/useSetting'
import Profile from '../../Components/User/Profile.jsx'
import UpdateProfile from '../../Components/User/UpdateProfile'
import Wishlist from '../../Components/User/Wishlist'
import Orders from '../../Components/User/Orders'
import Address from '../../Components/User/Address'
import { useSearchParams } from 'react-router-dom'


export default function ProfilePage() {
    let settingData = useSetting()
    let [option, setOption] = useState("Profile")
    let [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        setOption(searchParams.get("option") ?? "Profile")
    }, [searchParams])
    function changeParams(value) {
        setOption(value)
        setSearchParams({ option: value })
    }
    return (
        <>
            <div data-aos="fade-down" data-aos-delay="100">
                <Breadcrum pageTitle={`Profile`} pageDescription={`Manage your ${settingData.siteName} profile to keep your account information updated and secure. View your personal details, track recent orders, manage addresses, update passwords, and customize your shopping preferences. Your profile helps deliver a faster, smoother, and more personalized shopping experience every time you visit ${settingData.siteName}.`} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div data-aos="fade-right" data-aos-delay="100">
                            <ul className='d-none d-md-flex d-lg-block flex-row justify-content-center overflow-auto'>
                                <li className='btn btn-primary d-none d-lg-block mb-1'>Select Option</li>
                                <li className={`btn ${option === "Profile" ? 'btn-primary' : 'btn-light'} mb-1 d-block`} onClick={() => changeParams("Profile")} >Profile Details</li>
                                <li className={`btn ${option === "Update" ? 'btn-primary' : 'btn-light'} mb-1 d-block`} onClick={() => changeParams("Update")} >Update Profile</li>
                                <li className={`btn ${option === "Wishlist" ? 'btn-primary' : 'btn-light'} mb-1 d-block`} onClick={() => changeParams("Wishlist")} > Wishlist</li>
                                <li className={`btn ${option === "Orders" ? 'btn-primary' : 'btn-light'} mb-1 d-block`} onClick={() => changeParams("Orders")} >Orders</li>
                                <li className={`btn ${option === "Address" ? 'btn-primary' : 'btn-light'} mb-1 d-block`} onClick={() => changeParams("Address")} >Address</li >
                            </ul >
                            <ul className='d-flex d-md-none flex-row justify-content-between pe-4'>
                                <li className={`btn ${option === "Profile" ? 'btn-primary' : 'btn-light'} mb-1 d-block rounded-top-circle`} onClick={() => changeParams("Profile")} ><i className='bi bi-person-circle'></i><div className='fs-10' >Profile</div></li>
                                <li className={`btn ${option === "Update" ? 'btn-primary' : 'btn-light'} mb-1 d-block  rounded-top-circle`} onClick={() => changeParams("Update")} ><i className='bi bi-pencil-square'></i><div className='fs-10' >Update</div></li>
                                <li className={`btn ${option === "Wishlist" ? 'btn-primary' : 'btn-light'} mb-1 d-block  rounded-top-circle`} onClick={() => changeParams("Wishlist")} > <i className='bi bi-heart'></i><div className='fs-10' >Wishlist</div></li>
                                <li className={`btn ${option === "Orders" ? 'btn-primary' : 'btn-light'} mb-1 d-block  rounded-top-circle`} onClick={() => changeParams("Orders")} ><i className='bi bi-bag-check'></i><div className='fs-10' >Orders</div></li>
                                <li className={`btn ${option === "Address" ? 'btn-primary' : 'btn-light'} mb-1 d-block  rounded-top-circle`} onClick={() => changeParams("Address")} ><i className='bi bi-geo-alt'></i><div className='fs-10' >Address</div></li>
                            </ul >
                        </div>
                    </div >
                    <div className="col-lg-9">
                        <div data-aos="fade-left" data-aos-delay="100">
                            <div className={`${option === "Profile" ? 'd-block' : 'd-none'}`}>
                                <h4 className='bg-primary text-light text-center p-1 rounded'>Profile Details</h4>
                                <Profile option={option} />
                            </div>
                            <div className={`${option === "Update" ? 'd-block' : 'd-none'}`}>
                                <h4 className='bg-primary text-light text-center p-1 rounded'>Update Profile</h4>
                                <UpdateProfile changeParams={changeParams} />
                            </div>
                            <div className={`${option === "Wishlist" ? 'd-block' : 'd-none'}`}>
                                <h4 className='bg-primary text-light text-center p-1 rounded'>Wishlist</h4>
                                <Wishlist />
                            </div>
                            <div className={`${option === "Orders" ? 'd-block' : 'd-none'}`}>
                                <h4 className='bg-primary text-light text-center p-1 rounded'>Orders</h4>
                                <Orders />
                            </div>
                            <div className={`${option === "Address" ? 'd-block' : 'd-none'}`}>
                                <h4 className='bg-primary text-light text-center p-1 rounded'>Address</h4>
                                <Address />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
