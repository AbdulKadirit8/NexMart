import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSlider() {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-house-door pe-3'></i>
                    Home
                </Link>
                <Link to="/admin/maincategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-grid pe-3'></i>
                    Main Category
                </Link>
                <Link to="/admin/subcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-diagram-3 pe-3'></i>
                    Subcategory
                </Link>
                <Link to="/admin/brandcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-award pe-3'></i>
                    Brand
                </Link>
                <Link to="/admin/productcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-bag-check pe-3'></i>
                    Product
                </Link>
                <Link to="/admin/featurecategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-stars pe-3'></i>
                    Feature
                </Link>
                <Link to="/admin/faqcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-question-circle pe-3'></i>
                    FAQ
                </Link>
                <Link to="/admin/newslattercategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-envelope pe-3'></i>
                    Newslatter
                </Link>
                <Link to="/admin/checkoutcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-bag-check pe-3'></i>
                    Checkout
                </Link>
                <Link to="/admin/contactuscategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-telephone pe-3'></i>
                    Contact us
                </Link>
                <Link to="/admin/usercategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-person  pe-3'></i>
                    User
                </Link>
                <Link to="/admin/settingcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-gear pe-3'></i>
                    Setting
                </Link>
                
            </div>
        </>
    )
}
