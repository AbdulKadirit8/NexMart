import React from 'react'
import AdminSlider from '../../Components/Admin/AdminSlider'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Data table library
import DataTable from 'datatables.net-dt'

// Data Tables css 
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSubcategory, getSubcategory } from '../../Redux/ActionCreaters/SubcategoryActionCreaters'



export default function AdminMainCategoryPage() {
   
    let [data, setData] = useState([])
    let subcategoryStateData = useSelector(state => state.subcategoryStateData)
    let dispatch = useDispatch()

    // Delete function
    function deleteRecord(id) {
        if (window.confirm("Are you sure to Delete this record")) {
            //with redux
            dispatch(deleteSubcategory({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }
    useEffect(() => {
        let time = (() => {
            //without redux
            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/subcategory`, {
            //     method: "GET",
            //     headers: {
            //         'content-type': 'application/json'
            //     },

            // })
            // response = await response.json()
            // setMainCategoryStateData(response)

            //Using Redux
            dispatch(getSubcategory())
            if (subcategoryStateData.length) {
                setData(subcategoryStateData)
            }
            let time = setTimeout(() => {
                new DataTable('#myTable');
            }, 500)
            return time
        })()
        return () => clearTimeout(time)
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
                                <h4 className='bg-primary text-light text-center p-1'>Subcategory <Link to='/admin/subcategory/create' title='Create'><i className='bi bi-plus text-light float-end'></i></Link></h4>
                                <div className="table-responsive">
                                    <table className='table table-bordered' id='myTable'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>PIC</th>
                                                <th>STATUS</th>
                                                <th>UPDATE</th>
                                                <th>DELETE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => {
                                                return <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td><Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                                                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={60} width={80} alt="" />
                                                    </Link></td>
                                                    <td>{item.status ? "Active" : "Inactive"}</td>
                                                    <td><Link to={`/admin/subcategory/update/${item.id}`}><i className='bi bi-pencil btn btn-primary'></i></Link></td>
                                                    <td><button onClick={() => deleteRecord(item.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button></td>

                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
