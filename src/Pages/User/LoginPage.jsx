import React, { useState } from 'react'
import Breadcrum from '../../Components/Breadcrum'
import TextValidater from '../../FormValidaters/TEXTvalidater'
import { Link, useNavigate } from 'react-router-dom'
import useSetting from '../../hooks/useSetting'

export default function LoginPage() {
  let settingData = useSetting()
  let [data, setData] = useState({
    name: '',
    username: '',


  })

  let [errorMessage, setErrorMessage] = useState("")

  let navigate = useNavigate()

  function getInputData(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })

  }
  async function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error)
      setShow(true)

    else {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
      })
      response = await response.json()
      let item = response.find(x => x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.
        toLocaleLowerCase() === data.username?.toLocaleLowerCase())
      if (item && item.status === false) {
        setErrorMessage('Your Account Has Been Blocked Due To Some Authorized Activity, Please Contact Us To Unblock Your Account')
      }
      else if (item) {
        localStorage.setItem("login", true)
        localStorage.setItem("name", item.name)
        localStorage.setItem("userid", item.id)
        localStorage.setItem("role", item.role)
        if (item.role === "Buyer")
          navigate("/profile")
        else
          navigate("/admin")
      }
      else {
        setErrorMessage("Invalid Username and Password")

      }
    }

  }
  return (
    <>
      <Breadcrum pageDescription={`Welcome back to ${settingData.siteName}! Log in to explore premium products, manage your orders, save your favorite items, and enjoy a fast, secure, and personalized shopping experience. Access exclusive deals, track deliveries in real time, and shop smarter with everything you need, all in one place.`} pageTitle={'Login To Your Account'} />
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 col-md-11 m-auto">
            <div className="card mb-5 mt-5 p-5">
              <h5 className='text-center p-2 bg-primary text-light  rounded'>Login To Your Account</h5>
              <form onSubmit={postData}>
                <div className="row">

                  <div className={`col-12  ${errorMessage.username ? '' : 'mb-3'}`}>
                    <label className='ps-2'>User Name*</label>
                    <input type="text" name="username" onChange={getInputData} placeholder='User Name' className={`form-control ${errorMessage.username ? 'border-danger' : 'border-primary'}`} />
                    {errorMessage ? <p className='text-danger'>{errorMessage}</p> : null}
                  </div>


                  <div className={`col-12 ${errorMessage.password ? '' : 'mb-3'}`}>
                    <label className='ps-2'>Password*</label>
                    <input type="password" name="conformPassword" onChange={getInputData} placeholder='Conform Password' className={`form-control ${errorMessage.password ? 'border-danger' : 'border-primary'}`} />
                  </div>

                </div>
                <div className="col-12 mb-3">
                  <button type='submit' className='btn btn-primary w-100'>Login</button>
                </div>
              </form>
              <div className='d-flex justify-content-between'>
                <Link to="#" className='text-dark'>Already Have an Account?<span className='text-primary'>Forget Password</span></Link>
                <Link to="/signup" className='text-dark'>Doesn't Have an Account?<span className='text-primary'>Create</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
