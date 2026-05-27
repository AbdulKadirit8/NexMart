import React, { useEffect, useState } from 'react'
import TextValidater from '../../FormValidaters/TEXTvalidater'


export default function UpdateProfile({ changeParams }) {

    let [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',

    })

    let [errorMessage, setErrorMessage] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',

    })

    let [show, setShow] = useState(false)

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

        else {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })
            response = await response.json()
            let item = response.find(x => x.id !== data.id && (x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase()))
            if (item) {
                setShow(true)
                setErrorMessage({
                    ...errorMessage,
                    username: item.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() ? 'UserName Already Taken' : '',
                    email: item.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase() ? 'Email Already Registered' : ''
                })
            }
            else {
                localStorage.setItem("name", data.name)
                let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${data.id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        ...data,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,

                    })
                })
                response = await response.json()
                changeParams("Profile")
            }
        }
    }
    useEffect(() => {
        (async () => {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            setData({ ...data, ...response })
        })()
    }, [])

    return (
        <>
            <form onSubmit={postData}>
                <div className="row">
                    <div className={`col-lg-6 ${show && errorMessage.name ? '' : 'mb-3'}`}>
                        <label className='ps-2'>Name*</label>
                        <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Full Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                        {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                    </div>
                    <div className={`col-lg-6 ${show && errorMessage.username ? '' : 'mb-3'}`}>
                        <label className='ps-2'>User Name*</label>
                        <div className="input-group mb-2 border border-primary rounded">
                            <span className="input-group-text">
                                <i className="bi text-primary">@</i>
                            </span>
                            <input type="text" name="username" value={data.username} onChange={getInputData} placeholder='User Name' className={`form-control ${show && errorMessage.username ? 'border-danger' : 'border-primary'}`} />
                        </div>
                        {show && errorMessage.username ? <p className='text-danger'>{errorMessage.username}</p> : null}
                    </div>
                    <div className={`col-lg-6 ${show && errorMessage.email ? '' : 'mb-3'}`}>
                        <label className='ps-2'>Email*</label>
                        <input type="email" name="email" value={data.email} onChange={getInputData} placeholder='User Name' className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-primary'}`} />
                        {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
                    </div>
                    <div className={`col-lg-6 ${show && errorMessage.phone ? '' : 'mb-3'}`}>
                        <label className='ps-2'>Phone*</label>
                        <input type="text" name="phone" value={data.phone} onChange={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, "");
                            getInputData(e);
                        }} placeholder='Phone Number' maxLength={10} pattern="[0-9]{10}" className={`form-control ${show && errorMessage.phone ? 'border-danger' : 'border-primary'}`} />
                        {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
                    </div>

                    <div className="col-12 mb-3">
                        <button type='submit' className='btn btn-primary w-100'>Update</button>
                    </div>

                </div>
            </form>
        </>
    )
}
