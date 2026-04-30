import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFaq, updateFaq } from '../../Redux/ActionCreaters/FaqActionCreaters'
import AdminSlider from '../../Components/Admin/AdminSlider'
import TextValidater from '../../FormValidaters/TextValidater'

export default function AdminUpdateFaqPage() {

    let { id } = useParams()

    let [data, setData] = useState({
        name: '',
        icon: '',
        description: '',
        status: true
    })

    let [errorMessage, setErrorMessage] = useState({
        name: '',
        icon: '',
        description: ''
    })
    let [showError, setShowError] = useState(false)
    let navigate = useNavigate()

    let faqStateData = useSelector(state => state.faqStateData)
    let dispatch = useDispatch()


    function getInputData(e) {
        let {name, value} = e.target

        

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: TextValidater(e) })
    }
    function postData(e) {
        e.preventDefault()

        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShowError(true)
        else {
            let item = faqStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
            if (item) {
                setShowError(true)
                setErrorMessage({ ...errorMessage, 'name': "Faq with this name id already Exist" })
                return
            }
      
            dispatch(updateFaq({ ...data }))
            navigate("/admin/faq")
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getFaq())
            if (faqStateData.length) {
                let item = faqStateData.find(x => x.id == id)
                if (item) {
                    setData({ ...data, ...item })
                }
                else {
                    navigate('/admin/faq')
                }
            }
        })()
    }, [faqStateData.length])
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
                                <h4 className='bg-primary text-light text-center p-2 rounded'>Update Faq <Link to='/admin/faq' title='Back'><i className='bi bi-arrow-left text-light float-end'></i></Link></h4>



                                <form onSubmit={postData}>
                                    <div className="row">
                                        
                                        
                                        <div className="col-12 mb-3">
                                            <label>Name</label>
                                            <input type="text" name="name" value={data.name} onChange={getInputData} className={`form-control border-2 ${showError && errorMessage.name ? 'border-danger' : 'border-primary'}`} placeholder='Faq' />
                                            {showError && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                        </div>
                                        
                                        <div className="col-12 mb-3">
                                            <label>Description<span className='text-danger'>*</span></label>
                                            <textarea name="description" value={data.description} rows={3} onChange={getInputData} className={`form-control border-2 ${showError && errorMessage.description ? 'border-danger' : 'border-primary'}`} placeholder='Description' ></textarea>
                                            {showError && errorMessage.description ? <p className='text-danger'>{errorMessage.description}</p> : null}
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label>Icon<span className='text-danger'>*</span></label>
                                            <input type="text" name="icon" value={data.icon} onChange={getInputData} className={`form-control ${showError && errorMessage.icon ? 'border-danger' : 'border-primary'}`} placeholder="Bootstrap Icon Tag eg. <i className='bi bi-list'></i>" />
                                            {showError && errorMessage.icon ? <p className='text-danger'>{errorMessage.icon}</p> : null}
                                        </div>

                                        <div className="col-6 mb-3">
                                            <label>Status<span className='text-danger'>*</span></label>
                                            <select name="status" value={data.status ? "1" : "0"} onChange={getInputData} className='form-select'>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <button type='submit' className='btn btn-primary w-100'>Update</button>
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
