import React, { useState } from 'react'
import Breadcrum from '../../Components/Breadcrum'
import TextValidater from '../../FormValidaters/TEXTvalidater'
import { Link, useNavigate } from 'react-router-dom'
import useSetting from '../../hooks/useSetting'

export default function SignupPage() {
    let settingData = useSetting()
    let [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        conformPassword: '',

    })

    let [errorMessage, setErrorMessage] = useState({
        name: 'Name field is mendatory',
        username: 'User Name field is mendatory',
        email: 'Email field is mendatory',
        phone: 'Phone field is mendatory',
        password: 'Password field is mendatory',
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrorMessage({ ...errorMessage, [name]: TextValidater(e) })
    }
    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else if (data.password !== data.conformPassword) {
            setShow(true)
            setErrorMessage({
                ...errorMessage, password: "Password and Conform Password Does't Match"
            })
        }
        else {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })
            response = await response.json()
            let item = response.find(x => x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({
                    ...errorMessage,
                    username: item.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() ? 'UserName Already Taken' : '',
                    email: item.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase() ? 'Email Already Registered' : ''
                })
            }
            else {
                let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        password: data.password,
                        role: 'Buyer',
                        status: true
                    })
                })
                response = await response.json()
                navigate("/login")

            }
        }

    }
    return (
        <>
            <Breadcrum pageDescription={`Join ${settingData.siteName} today and create your free account to enjoy a seamless shopping experience. Discover premium products, save your favorite items, track orders easily, and get access to exclusive offers and deals. Sign up now to shop faster, smarter, and more securely with ${settingData.siteName} anytime, anywhere.`} pageTitle={'fdgfdg'} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-11 m-auto">
                        <div className="card  p-5">
                            <h5 className='text-center p-2 bg-primary text-light  rounded'>Create Your Free Account</h5>
                            <form onSubmit={postData}>
                                <div className="row">
                                    <div className={`col-lg-6 ${show && errorMessage.name ? '' : 'mb-3'}`}>
                                        <label className='ps-2'>Name*</label>
                                        <input type="text" name="name" onChange={getInputData} placeholder='Full Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                                        {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                    </div>
                                    <div className={`col-lg-6 ${show && errorMessage.username ? '' : 'mb-3'}`}>
                                        <label className='ps-2'>User Name*</label>
                                        <div className="input-group mb-2 border border-primary rounded">
                                            <span className="input-group-text">
                                                <i className="bi text-primary">@</i>
                                            </span>
                                            <input type="text" name="username" onChange={getInputData} placeholder='User Name' className={`form-control ${show && errorMessage.username ? 'border-danger' : 'border-primary'}`} />
                                            {show && errorMessage.username ? <p className='text-danger'>{errorMessage.username}</p> : null}
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${show && errorMessage.email ? '' : 'mb-3'}`}>
                                        <label className='ps-2'>Email*</label>
                                        <input type="email" name="email" onChange={getInputData} placeholder='User Name' className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-primary'}`} />
                                        {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
                                    </div>
                                    <div className={`col-lg-6 ${show && errorMessage.phone ? '' : 'mb-3'}`}>
                                        <label className='ps-2'>Phone*</label>
                                        <input type="text" name="phone" onChange={(e) => {
                                            e.target.value = e.target.value.replace(/\D/g, "");
                                            getInputData(e);
                                        }} placeholder='Phone Number' maxLength={10} pattern="[0-9]{10}" className={`form-control ${show && errorMessage.phone ? 'border-danger' : 'border-primary'}`} />
                                        {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
                                    </div>
                                    <div className={`col-lg-6 ${show && errorMessage.password ? '' : 'mb-3'}`}>
                                        <label className='ps-2'>Enter Password*</label>
                                        <input type="password" name="password" onChange={getInputData} placeholder='User Name' className={`form-control ${show && errorMessage.password ? 'border-danger' : 'border-primary'}`} />

                                    </div>
                                    <div className={`col-lg-6 ${show && errorMessage.password ? '' : 'mb-3'}`}>
                                        <label className='ps-2'>Enter Password*</label>
                                        <input type="password" name="conformPassword" onChange={getInputData} placeholder='Conform Password' className={`form-control ${show && errorMessage.password ? 'border-danger' : 'border-primary'}`} />
                                    </div>
                                    <div className="col-12 w-100">
                                        {show && errorMessage.password ? errorMessage.password?.split("|").map((x, index) => {
                                            return <p className='text-danger' key={index}>{x}</p>
                                        }) : null}
                                    </div>
                                    <div className="col-12 mb-3">
                                        <button type='submit' className='btn btn-primary w-100'>Signup</button>
                                    </div>

                                </div>
                            </form>
                            <Link to={'/login'} className='text-dark'>Already Have an Account ? <span className='text-primary'>Login</span></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
