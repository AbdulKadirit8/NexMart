import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getWishlist, deleteWishlist } from '../../Redux/ActionCreaters/WishlistActionCreaters'
import { Link } from 'react-router-dom'

export default function Wishlist() {
  let [data, setData] = useState([])
  let dispatch = useDispatch()
  let wishlistStateData = useSelector(state => state.wishlistStateData)

  function deleteRecord(id) {
    if (window.confirm("Are you sure to Delete this record")) {
      //with redux
      dispatch(deleteWishlist({ id: id }))
      setData(data.filter(x => x.id !== id))
    }
  }
  useEffect(() => {
    (() => {
      dispatch(getWishlist())
      if (wishlistStateData.length) {
        setData(wishlistStateData.filter(x => x.user === localStorage.getItem("userid")))
      }
    })()
  }, [wishlistStateData.length])
  return (

    <>
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
                  <th>Cart</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => {
                  return <tr key={item.id} className='mb-1'>
                    <td>
                      <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} style={{ width: 150 }} alt="Wishlist Image" />
                      </Link>
                    </td>
                    <td style={{ maxWidth: 180 }}>{item.name}</td>
                    <td>{item.brand}</td>
                    <td style={{ maxWidth: 150 }}>{item.color.join(', ')}</td>
                    <td style={{ maxWidth: 120, minWidth: 80 }}>{item.size.join(', ')}</td>
                    <td>{item.stockQuantity ? 'In Stock' : 'Out Of Stock'}</td>
                    <td>&#8377;{item.finalPrice}</td>
                    <td>
                      <Link to={`/product/${item.product}`} className='btn btn-primary'><i className='bi bi-cart '></i></Link>
                    </td>
                    <td>
                      <button onClick={()=>deleteRecord(item.id)} className='btn btn-danger'><i className='bi bi-trash '></i></button>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </> :
        <div className='text-center my-5'>
          <h4>No Item In Cart</h4>
          <Link to='/shop' className='btn btn-primary'>Shop Now</Link>
        </div>}
    </>
  )
}
