import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFeature, getFeature } from '../../Redux/ActionCreaters/FeatureActionCreaters'
import React from 'react'
import AdminSlider from '../../Components/Admin/AdminSlider'

// Data table library
import DataTable from 'datatables.net-dt'

// Data Tables css 
import 'datatables.net-dt/css/dataTables.dataTables.min.css'




export default function AdminFeaturePage() {
  
    let [data, setData] = useState([])
    let featureStateData = useSelector(state => state.featureStateData)
    let dispatch = useDispatch()

    // Delete function
    function deleteRecord(id) {
        if (window.confirm("Are you sure to Delete this record")) {
            //with redux
            dispatch(deleteFeature({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }
   
    useEffect(() => {
        let time = (() => {
            
            //Using Redux
            dispatch(getFeature())
            if (featureStateData.length) {
                setData(featureStateData)
            }
            let time = setTimeout(() => {
                new DataTable('#myTable');
            }, 500)
            return time
        })()
        return () => clearTimeout(time)
    }, [featureStateData.length])
    return (
        <>
            <section id="hero" className="hero section pb-0">

                <div className="container my-3 admin">

                    <div className="row">

                        <div className="col-md-3">
                            <div data-aos="fade-right" data-aos-delay="100">
                                <AdminSlider />
                            </div>

                        </div>
                        <div className="col-md-9">
                            <div data-aos="fade-left" data-aos-delay="100">
                                <h4 className='bg-primary text-light text-center p-1'>Feature <Link to='/admin/feature/create' title='Create'><i className='bi bi-plus text-light float-end'></i></Link></h4>
                                <div className="table-responsive">
                                    <table className='table table-bordered' id='myTable'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>ICON</th>
                                                <th>DESCRIPTION</th>
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
                                                    <td><span className='fs-1 text-primary' dangerouslySetInnerHTML={{__html:item.icon}}></span></td>
                                                    <td>{item.description}</td>
                                                    
                                                    <td>{item.status ? "Active" : "Inactive"}</td>
                                                    <td className="text-center"><Link to={`/admin/feature/update/${item.id}`}><i className='bi bi-pencil btn btn-primary'></i></Link></td>
                                                    <td className="text-center"><button onClick={() => deleteRecord(item.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button></td>
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
