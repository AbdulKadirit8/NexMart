import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createFeature, getFeature } from '../../Redux/ActionCreaters/FeatureActionCreaters'
import AdminSlider from '../../Components/Admin/AdminSlider'
import TextValidater from '../../FormValidaters/Textvalidater'

export default function AdminCreateFeaturePage() {
    let [data, setData] = useState({
        name: '',
        description: '',
        icon: '',
        status: true
    })

    let [errorMessage, setErrorMessage] = useState({
        name: 'Name field is Mendatory',
        description: 'Description field is Mendatory',
        icon: 'Icon field is Mendatory'
    })
    let [showError, setShowError] = useState(false)
    let navigate = useNavigate()

    let featureStateData = useSelector(state => state.featureStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        let { name, value } = e.target

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: TextValidater(e) })
    }
    function postData(e) {
        e.preventDefault()

        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShowError(true)
        else {
            let item = featureStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
            if (item) {
                setShowError(true)
                setErrorMessage({ ...errorMessage, 'name': "Feature with this name is already Exist" })
                return
            }
            //Domy Backend
            dispatch(createFeature({ ...data }))


            navigate("/admin/feature")
        }
    }
    useEffect(() => {
        (() => dispatch(getFeature()))()
    }, [featureStateData.length])

    return (
        <>
            <section id="hero" className="hero section pb-0">

                <div className="container my-3 admin">

                    <div className="row ">

                        <div className="col-lg-3">
                            <div data-aos="fade-right" data-aos-delay="100">
                                <AdminSlider />
                            </div>

                        </div>
                        <div className="col-lg-9">
                            <div data-aos="fade-left" data-aos-delay="100">
                                <h4 className='bg-primary text-light text-center p-2 rounded'>Create Feature <Link to='/admin/feature' title='Back'><i className='bi bi-arrow-left text-light float-end'></i></Link></h4>



                                <form onSubmit={postData}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label>Name<span className='text-danger'>*</span></label>
                                            <input type="text" name="name" onChange={getInputData} className={`form-control border-2 ${showError && errorMessage.name ? 'border-danger' : 'border-primary'}`} placeholder='Feature' />
                                            {showError && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label>Description<span className='text-danger'>*</span></label>
                                            <textarea name="description" rows={3} onChange={getInputData} className={`form-control border-2 ${showError && errorMessage.description ? 'border-danger' : 'border-primary'}`} placeholder='Description' ></textarea>
                                            {showError && errorMessage.description ? <p className='text-danger'>{errorMessage.description}</p> : null}
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Icon<span className='text-danger'>*</span></label>
                                            <input type="text" name="icon" onChange={getInputData} className={`form-control ${showError && errorMessage.icon ? 'border-danger' : 'border-primary'}`} placeholder="Bootstrap Icon Tag eg. <i className='bi bi-list'></i>" />
                                            {showError && errorMessage.icon ? <p className='text-danger'>{errorMessage.icon}</p> : null}
                                        </div>

                                        <div className="col-6 mb-3">
                                            <label>Status<span className='text-danger'>*</span></label>
                                            <select name="status" onChange={getInputData} className='form-select'>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <button type='submit' className='btn btn-primary w-100'>Create</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
