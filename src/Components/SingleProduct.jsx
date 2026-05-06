import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleProduct({item}) {
    return (
        <div className="service-item">
            <div className="service-image">
                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} alt="Product Image" className="img-fluid" />
            </div>
            <div className="service-content">
                
                <h6 style={{minHeight:60}} className='fw-bold'>{item.name}</h6>
                <div className='row mb-2 ms-1'>
                    <div className='text-center rounded bg-danger text-light col-5 col-sm-8 col-md-7 col-lg-7 col-xxl-5'>Limited time deal</div>
                </div>
                <span className='fs-5 text-dark'> <sup className='text-danger'>-{item.discount}% Off</sup> &#8377;<span className='fw-bold'>{item.finalPrice}</span> </span>
                <span className='fs-8 text-dark'><small>M.R.P.<del>&#8377;{item.basePrice}</del> <span className='fs-8'><i className='bi bi-truck text-primary ms-2 me-2'></i> FREE delivery</span></small></span>
                <div className="service-features d-flex justify-content-between">
                    <span className="feature-item"><i className="bi bi-tag-fill"></i> {item.brand}</span>
                    <span className="feature-item"><i className="bi bi-box-seam-fill"></i> {item.stockQuantity} Left In Stock</span>
                </div>
                <Link to={`/product/${item.id}`} className="service-btn">
                    <span>Add to Cart</span>
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}
