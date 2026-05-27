import React, { useEffect, useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
const inputOption = {
    name: "",
    email: "",
    phone: "",
    address: "",
    pin: "",
    city: "",
    state: "",
}
export default function Address() {
    let [data, setData] = useState({})
    let [option, setOption] = useState("")
    let [inputData, setInputData] = useState(inputOption)

    let [showModal, setShowModal] = useState(false)
    function getInputData(e) {
        let { name, value } = e.target
        setInputData({ ...inputData, [name]: value })
    }
    function createRecord() {
        setShowModal(true)
        setOption("Create")
        setInputData({ ...inputOption })
    }
    function updteRecord(index) {
        setShowModal(true)
        setOption("Update")
        setInputData({ ...data.address[index], index: index })
    }

    async function postData(e) {
        e.preventDefault()

        let pinValidator, poneValidator
        if (inputData.pin.length !== 6) {
            // toast.info("Enter the Valid Pin Code")
            // return
            pinValidator = "Enter the Valid Pin Code"
        }
        if (inputData.phone.length !== 10) {
            // toast.info("Enter the Valid Phone Number")
            // return
            poneValidator = "Enter the Valid Phone Number"
        }

        if (pinValidator || poneValidator) {
            pinValidator && poneValidator ? toast.info(`Please Enter The Valid Phone Number And Pin Code`) : pinValidator ? toast.info(`${pinValidator}`) : toast.info(`${poneValidator}`)
            return
        }
        if (option === "Create") {
            let adressExist = data.address?.find(x => x.address.toLocaleLowerCase() === inputData.address.toLocaleLowerCase() &&
                x.pin === inputData.pin)
            if (adressExist) {
                toast.info("This Address Already Exist In Your Address!")
                return
            }
            var item = { ...data, address: data.address ? data.address.concat([inputData]) : [inputData] }
            toast.info(`Add Address Successfully`)
        }
        else {
            let index = inputData.index
            data.address[index] = { ...inputData }
            var item = { ...data }
            toast.info(`Update Address Successfully`)
        }
        setData({ ...item })
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...item })
        })
        response = await response.json()
        setInputData(inputOption)
        setShowModal(false)
        
    }
    async function deleteAddress(index) {
        if (confirm("Are You Sure To Delete This Record")) {
            data.address?.splice(index, 1)
            setData({ ...data })
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ ...data })
            })
            response = await response.json()
            toast.info(`Delete Address Successfully`)
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
            setData(response)
        })()
    }, [])
    return (
        <>
            <div>
                <button type="button" className="btn btn-primary float-end d-block" onClick={createRecord} >
                    {/* {data.address.length===0?`Create New Address`:`Add New Address`} */}
                    {!data.address || data.address.length === 0
                        ? "Create New Address"
                        : "Add New Address"}
                    {/* Add */}
                </button>
            </div>
            <div>


                <div className="mt-5">
                    {data.address?.map((item, index) => {
                        return <div key={index} className='mb-3'>
                            <div className="card p-2">
                                <p>{item.name}</p>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                                <p>{item.address}</p>
                                <p>{item.pin}, {item.city}, {item.state}</p>
                                <div className="btn-group  position-absolute end-0 pe-2">
                                    <button className='btn btn-primary' onClick={() => updteRecord(index)}><i className='bi bi-pencil-square'></i></button>
                                    <button className='btn btn-danger' onClick={() => deleteAddress(index)}><i className='bi bi-trash'></i></button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                {/* Modal */}
                <div className={`modal fade ${showModal ? 'show d-block' : ''} display:block`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Create Record</h1>
                                <button type="button" onClick={() => setShowModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={postData}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label className='ps-2'>Name*</label>
                                            <input type="text" name='name' className='form-control border-primary' value={inputData.name} onChange={getInputData} placeholder='Full Name' required />
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <label className='ps-2'>Email*</label>
                                            <input type="email" name='email' className='form-control border-primary' value={inputData.email} onChange={getInputData} placeholder='Email' required />
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <label className='ps-2'>Phone*</label>
                                            <input type="text" name='phone' className='form-control border-primary' value={inputData.phone} onChange={(e) => {
                                                e.target.value = e.target.value.replace(/\D/g, "")
                                                getInputData(e)
                                            }} placeholder='Mobile Number' required />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className='ps-2'>Addess*</label>
                                            <textarea type="text" name='address' className='form-control border-primary' value={inputData.address} onChange={getInputData} placeholder='Address' rows={2} required />
                                        </div>
                                        <div className="col-lg-4 col-6 mb-3">
                                            <label className='ps-2'>Pin Code*</label>
                                            <input type="text" name='pin' className='form-control border-primary' value={inputData.pin} onChange={(e) => {
                                                e.target.value = e.target.value.replace(/\D/g, "")
                                                getInputData(e)
                                            }} placeholder='Pin Code' required />
                                        </div>
                                        <div className="col-lg-4 col-6 mb-3">
                                            <label className='ps-2'>City*</label>
                                            <input type="text" name='city' className='form-control border-primary' value={inputData.city} onChange={getInputData} placeholder='City' required />
                                        </div>
                                        <div className="col-lg-4 mb-3">
                                            <label className='ps-2'>State*</label>
                                            <input type="text" name='state' className='form-control border-primary' value={inputData.state} onChange={getInputData} placeholder='State' required />
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className='btn btn-primary mb-1 w-100'>Create</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {showModal ? <div className="modal-backdrop fade show"></div> : null}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
            </div>
        </>
    )
}
