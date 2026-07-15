import React, { useEffect, useState } from 'react'

import { deleteCart, getCart, updateCart } from '../../Redux/ActionCreaters/CartActionCreaters'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Breadcrum from '../../Components/Breadcrum'
import useSetting from '../../hooks/useSetting'

export default function CartPage() {
    let [data, setData] = useState([])
    let [subtotal, setSubtotal] = useState(0)
    let [total, setTotal] = useState(0)
    let [shipping, setShipping] = useState(0)
    let settingData = useSetting()
    let dispatch = useDispatch()
    let cartStateData = useSelector(state => state.cartStateData)

    function deleteRecord(id) {
        if (window.confirm("Are you sure to Delete this record")) {
            //with redux
            dispatch(deleteCart({ id: id }))
            setData(data.filter(x => x.id !== id))
        }
    }
    function calculate(cart) {
        let sub=0
        cart.forEach(element => sub += element.totalPrice)
        if (sub > 0 && sub < 1000) {
            setShipping(150)
            setTotal(sub + 150)
        }
        else {
            setShipping(0)
            setTotal(sub)
        }
        setSubtotal(sub)
    }
    function updateRecord(option, id) {
        let item = data.find(x => x.id === id)
        let index = data.findIndex(x => x.id === id)
        
        if ((item.stockQuantity === 0) || (option === "Dec" && item.qty === 1) || (option === "Inc" && item.qty === item.stockQuantity))
            return
        else if (option === "Dec") {
            item['quantity'] = item['quantity'] - 1
            item['total'] = item['total'] - item['totalPrice']
        }
        else {
            item['quantity'] = item['quantity'] + 1
            item['total'] = item['total'] + item['totalPrice']
        }
        data[index] = { ...item }
        setData(data)
        dispatch(updateCart({ ...item }))
        calculate(data)
    }
    useEffect(() => {
        (() => {
            dispatch(getCart())
            if (cartStateData.length) {
                let cart = cartStateData.filter(x => x.user === localStorage.getItem("userid"))
                setData(cart)
                calculate(cart)
            }
        })()
    }, [cartStateData.length])


    return (
        <>
            <Breadcrum pageTitle={`Cart`} pageDescription={`Review the items in your ${settingData.siteName} cart before checkout. Update quantities, remove products, and see your order summary in real time. Enjoy a smooth shopping experience with secure checkout, transparent pricing, and quick access to all the products you've selected for purchase.`} />
            <div className="container">
                {data.length ?
                    <>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Brand</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Stock</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => {
                                        return <tr key={item.id} className='mb-1'>
                                            <td style={{ width: 160 }}>
                                                <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                                                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} style={{ width: 150 }} alt="Wishlist Image" />
                                                </Link>
                                            </td>
                                            <td style={{ maxWidth: 180 }}>{item.name}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.color}</td>
                                            <td>{item.size}</td>
                                            <td>{item.stockQuantity ? 'In Stock' : 'Out Of Stock'}</td>
                                            <td>&#8377;{item.finalPrice}</td>
                                            <td style={{ width: 170 }}>
                                                <div className="btn-group" style={{ width: 150 }}>
                                                    <button className='btn btn-primary' onClick={() => updateRecord('Dec', item.id)}><i className='bi bi-dash'></i></button>
                                                    <h4 className='w-50 text-center px-2'>{item.quantity}</h4>
                                                    <button className='btn btn-primary' onClick={() => updateRecord('Inc', item.id)}><i className='bi bi-plus'></i></button>
                                                </div>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteRecord(item.id)} className='btn btn-danger'><i className='bi bi-trash '></i></button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>&#8377; {subtotal}</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>&#8377; {shipping}</td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td>&#8377; {total}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <Link to={`/checkout`} className='btn btn-primary w-100'>Proceed To CheckOut</Link>
                                            </td>

                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </> :
                    <div className='text-center my-5'>
                        <h4>No Item In Wishlist</h4>
                        <Link to='/shop' className='btn btn-primary'>Shop Now</Link>
                    </div>
                }
            </div>
        </>
    )
}
