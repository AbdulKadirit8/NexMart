import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProduct } from '../../Redux/ActionCreaters/ProductActionCreaters'
import React from 'react'
import AdminSlider from '../../Components/Admin/AdminSlider'

// Data table library
import DataTable from 'datatables.net-dt'

// Data Tables css 
import 'datatables.net-dt/css/dataTables.dataTables.min.css'



export default function AdminProductPage() {

    let [data, setData] = useState([])
    let productStateData = useSelector(state => state.productStateData)
    let dispatch = useDispatch()

    // Delete function
    function deleteRecord(id) {
        if (window.confirm("Are you sure to Delete this record")) {
            //with redux
            dispatch(deleteProduct({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }

    useEffect(() => {
        let time = (() => {
            //without redux
            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/product`, {
            //     method: "GET",
            //     headers: {
            //         'content-type': 'application/json'
            //     },

            // })
            // response = await response.json()
            // setProductStateData(response)

            //Using Redux
            dispatch(getProduct())
            if (productStateData.length) {
                setData(productStateData)
            }
            let time = setTimeout(() => {
                new DataTable('#myTable');
            }, 500)
            return time
        })()
        return () => clearTimeout(time)
    }, [productStateData.length])
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
                                <h4 className='bg-primary text-light text-center p-2 rounded'>Product <Link to='/admin/product/create' title='Create'><i className='bi bi-plus text-light float-end'></i></Link></h4>
                                <div className="table-responsive">
                                    <table className='table table-bordered' id='myTable'>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>NAME</th>
                                                <th>MAINCATEGORY</th>
                                                <th>SUBCATEGORY</th>
                                                <th>BRAND</th>
                                                <th>COLOR</th>
                                                <th>SIZE</th>
                                                <th>BASE PRICE</th>
                                                <th>DISCOUNT</th>
                                                <th>FINAL PRICE</th>
                                                <th>STOCK</th>
                                                <th>STOCK QUANTITY</th>
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
                                                    <td>{item.maincategory}</td>
                                                    <td>{item.subcategory}</td>
                                                    <td>{item.brand}</td>
                                                    <td>{item.color?.join(", ")}</td>
                                                    <td>{item.size?.join(", ")}</td>
                                                    <td>&#8377;{item.basePrice}</td>
                                                    <td>{item.discount}% Off</td>
                                                    <td>&#8377;{item.finalPrice}</td>
                                                    <td>{item.stock ? "In Stock" : 'Out Of Stock'}</td>
                                                    <td>{item.stockQuantity}</td>
                                                    <td>
                                                        <div style={{width:270}}>
                                                            {item.pic?.map((p) => {
                                                            return <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${p}`} target='_blank'>
                                                                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${p}`} className='m-1 border border-primary p-1' width={80} alt="" />
                                                            </Link>
                                                        })}
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">{item.status ? "Active" : "Inactive"}</td>

                                                    <td className="text-center align-middle"><Link to={`/admin/product/update/${item.id}`}><i className='bi bi-pencil btn btn-primary'></i></Link></td>
                                                    <td className="text-center align-middle"><button onClick={() => deleteRecord(item.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button></td>
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
