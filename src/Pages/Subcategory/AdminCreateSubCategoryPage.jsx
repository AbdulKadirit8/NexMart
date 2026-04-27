import React, { useEffect, useState } from 'react'
import AdminSlider from '../../Components/Admin/AdminSlider'
import TextValidater from '../../FormValidaters/TEXTvalidater'
import PicValidater from '../../FormValidaters/PicValidater'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createSubcategory, getSubcategory } from '../../Redux/ActionCreaters/SubcategoryActionCreaters'

export default function AdminCreateSubCategoryPage() {
    let [data, setData] = useState({
        name: '',
        pic: '',
        status: true
    })

    let [errorMessage, setErrorMessage] = useState({
        name: 'Name field is Mendatory',
        pic: 'Pic field is Mendatory'
    })
    let [showError, setShowError] = useState(false)
    let navigate = useNavigate()

    let subcategoryStateData = useSelector(state => state.subcategoryStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        let name = e.target.name

        // Demmy Backend
        let value = name === "pic" ? "subcategory/" + e.target.files[0].name : e.target.value

        // Rael Backend
        // let value = name === "pic" ? e.target.files[0].name : e.target.value

        setData({ ...data, [name]: name === "status" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: name == "pic" ? PicValidater(e) : TextValidater(e) })
    }
    function postData(e) {
        e.preventDefault()

        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShowError(true)
        else {
            let item = subcategoryStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
            if (item) {
                setShowError(true)
                setErrorMessage({ ...errorMessage, 'name': "Subcategory with this name id already Exist" })
                return
            }
            //Domy Backend
            dispatch(createSubcategory({ ...data }))

            //Real backend
            // let formData=new FormData()
            // formData.append('name', data.name)
            // formData.append('pic', data.pic)
            // formData.append('status', data.status)
            // dispatch(createSubcategory(formData))

            navigate("/admin/subcategory")
        }
    }
    useEffect(() => {
            (() => dispatch(getSubcategory()))()
        }, [subcategoryStateData.length])
    
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
                                <h4 className='bg-primary text-light text-center p-2 rounded'>Create Subcategory <Link to='/admin/subcategory' title='Back'><i className='bi bi-arrow-left text-light float-end'></i></Link></h4>
                                
                                <form onSubmit={postData}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label>Name<span className='text-danger'>*</span></label>
                                            <input type="text" name="name" value={data.name} onChange={getInputData} className={`form-control border-2 ${showError && errorMessage.name ? 'border-danger' : 'border-primary'}`} placeholder='Product Name' />
                                            {showError && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>Pic<span className='text-danger'>*</span></label>
                                            <input type="file" name="pic" onChange={getInputData} className={`form-control ${showError && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
                                            {showError && errorMessage.pic ? <p className='text-danger'>{errorMessage.pic}</p> : null}
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
