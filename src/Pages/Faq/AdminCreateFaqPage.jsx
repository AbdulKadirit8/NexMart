import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createFaq, getFaq } from '../../Redux/ActionCreaters/FaqActionCreaters'
import AdminSlider from '../../Components/Admin/AdminSlider'
import TextValidater from '../../FormValidaters/Textvalidater'

export default function AdminCreateFaqPage() {
    let [data, setData] = useState({
        question: '',
        answer: '',
        status: true
    })

    let [errorMessage, setErrorMessage] = useState({
        question: 'Question field is Mendatory',
        answer: 'Answer field is Mendatory'
    })
    let [showError, setShowError] = useState(false)
    let navigate = useNavigate()

    let faqStateData = useSelector(state => state.faqStateData)
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
            let item = faqStateData.find(x => x.question?.toLocaleLowerCase() === data.question?.toLocaleLowerCase())
            if (item) {
                setShowError(true)
                setErrorMessage({ ...errorMessage, 'question': "Faq racord with this question is already Exist" })
                return
            }
            //Domy Backend
            dispatch(createFaq({ ...data }))


            navigate("/admin/faq")
        }
    }
    useEffect(() => {
        (() => dispatch(getFaq()))()
    }, [faqStateData.length])

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
                                <h4 className='bg-primary text-light text-center p-2 rounded'>Create Faq <Link to='/admin/faq' title='Back'><i className='bi bi-arrow-left text-light float-end'></i></Link></h4>



                                <form onSubmit={postData}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label>Question<span className='text-danger'>*</span></label>
                                            <input type="text" name="question" onChange={getInputData} className={`form-control border-2 ${showError && errorMessage.question ? 'border-danger' : 'border-primary'}`} placeholder='Faq Question' />
                                            {showError && errorMessage.question ? <p className='text-danger'>{errorMessage.question}</p> : null}
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label>Answer<span className='text-danger'>*</span></label>
                                            <textarea name="answer" rows={3} onChange={getInputData} className={`form-control border-2 ${showError && errorMessage.answer ? 'border-danger' : 'border-primary'}`} placeholder='Answer' ></textarea>
                                            {showError && errorMessage.answer ? <p className='text-danger'>{errorMessage.answer}</p> : null}
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
