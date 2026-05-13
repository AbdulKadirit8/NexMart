import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleProduct({ item }) {
    return (

        <div className="service-item">
            <Link to={`/productDetails/${item.id}`}>
                <div className="service-image">
                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} alt="Product Image" className="img-fluid" />
                </div>
                <div className="service-content">
                    <h5 style={{ minHeight: 20 }} className='fw-bold'>{item.brand}</h5>
                    <h6 style={{ minHeight: 60 }} className=''>{item.name}</h6>
                    <span className='fs-5 text-dark'> <sup className='text-danger'>-{item.discount}% Off</sup> &#8377;<span className='fw-bold'>{item.finalPrice}</span> </span>
                    <span className='fs-8 text-dark'><small>M.R.P.<del>&#8377;{item.basePrice}</del> <span className='fs-8'><i className='bi bi-truck text-primary ms-2 me-2'></i> {item.finalPrice > 500 ? 'FREE delivery' : <span>&#8377;49 Delivery charge</span>}</span></small></span>
                    <div className="service-features d-flex justify-content-between">
                        <span className="fs-6 feature-item">
                            <b className='text-secondary'>Size</b>&nbsp;
                            {item.size.slice(0, 2).join(', ')}
                            {item.size.length >= 3 ? ' ...' : ''}
                        </span>
                        <span className="fs-6 feature-item"><i className="bi bi-box-seam-fill"></i> {item.stockQuantity} Left In Stock</span>
                    </div>
                    <div className="service-btn">
                        <span>Add to Cart</span>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </Link>
        </div>
    )
}
