import React from 'react'
import AdminSlider from '../../Components/Admin/AdminSlider'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function AdminMainCategoryagePage() {
    let [mainCategoryStateData, setMainCategoryStateData] = useState([])

    // Delete function
    async function deleteRecord(id){
        if(window.confirm("Are you sure to Delete this record")){
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                },

            })
            response = await response.json()
            setMainCategoryStateData(mainCategoryStateData.filter(x=> x.id!==id))
        }
    }
    useEffect(() => {
        (async () => {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                },

            })
            response = await response.json()
            setMainCategoryStateData(response)
        })()
    }, [])
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
                                <h4 className='bg-primary text-light text-center p-1'>Maincategory <Link to='/admin/maincategory/create' title='Create'><i className='bi bi-plus text-light float-end'></i></Link></h4>
                                <div className="table-responsive">
                                    <table className='table table-bordered'>
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
                                            {mainCategoryStateData.map((item) => {
                                                return <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td><Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                                                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={60} width={80} alt="" />
                                                    </Link></td>
                                                    <td>{item.status?"Active":"Inactive"}</td>
                                                    <td><Link to={`/admin/maincategory/update/${item.id}`}><i className='bi bi-pencil btn btn-primary'></i></Link></td>
                                                    <td><button onClick={()=>deleteRecord(item.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button></td>
                                                    
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
