import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Breadcrum from '../Components/Breadcrum'
import ProductSlider from '../Components/ProductSlider'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCube, Pagination } from 'swiper/modules';

import { getProduct } from '../Redux/ActionCreaters/ProductActionCreaters'
import { getCart, createCart, updateCart } from '../Redux/ActionCreaters/CartActionCreaters'
import { getWishlist, createWishlist } from '../Redux/ActionCreaters/WishlistActionCreaters'



export default function ProductDetails() {

    let { id } = useParams()
    let [data, setData] = useState({})
    let [relatedData, setRelatedData] = useState([])
    let navigate = useNavigate()
    let [selected, setSelected] = useState({
        quantity: 1,
        color: "",
        option: ''
    })

    let productStateData = useSelector(state => state.productStateData)
    let cartStateData = useSelector(state => state.cartStateData)
    let wishlistStateData = useSelector(state => state.wishlistStateData)
    let dispatch = useDispatch()

    let cartItem = cartStateData.find(x => x.user === localStorage.getItem("userid") && x.product === id)
    function addToCart() {
        if (cartItem) {
            dispatch(updateCart({
                ...cartItem,
                quantity: selected.quantity,
                totalPrice: data.finalPrice * selected.quantity,
                color: selected.color,
                size: selected.option,
            }))
            navigate('/cart')
            return
        }
        dispatch(createCart({
            user: localStorage.getItem("userid"),
            product: id,
            quantity: selected.quantity,
            totalPrice: data.finalPrice * selected.quantity,
            color: selected.color,
            size: selected.option,

            // Remove following lines in case of real backend
            name: data.name,
            brand: data.brand,
            finalPrice: data.finalPrice,
            stockQuantity: data.stockQuantity,
            pic: data.pic[0],
        }))
        navigate('/cart')
    }
    
    let wishlistItem = wishlistStateData.find(x => x.user === localStorage.getItem("userid") && x.product === id)
    function addToWishlist() {
        if (wishlistItem) {
            navigate('/profile?option=Wishlist')
            return
        }
        dispatch(createWishlist({
            user: localStorage.getItem("userid"),
            product: id,


            // Remove following lines in case of real backend
            name: data.name,
            color: data.color,
            size: data.size,
            brand: data.brand,
            finalPrice: data.finalPrice,
            stockQuantity: data.stockQuantity,
            pic: data.pic[0],
        }))
        navigate('/profile?option=Wishlist')
    }

    
    let swiperOption = {
        effect: 'cube',
        grabCursor: true,
        loop: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: true,
        modules: [EffectCube, Pagination]
    }


    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (productStateData.length) {
                let item = productStateData.find(x => x.id === id)
                if (item) {
                    setData(item)
                    if (!selected.color) {

                        setSelected({
                            ...selected,
                            color: item?.color[0],
                            size: item?.size?.[0]
                        })
                    }
                    setRelatedData(productStateData.filter(x => x.maincategory === item.maincategory))

                }
                else
                    window.history.back()
            }

        })()
    }, [productStateData])

    useEffect(() => {
        (() => dispatch(getCart()))()
    }, [cartStateData.length])

    useEffect(() => {
        (() => dispatch(getWishlist()))()
    }, [wishlistStateData.length])



    return (
        <>
            <Breadcrum pageTitle={data.name} pageDescription={`${data.maincategory} > ${data.subcategory} > ${data.brand}`} />

            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-6 col-12 mb-4">
                        <Swiper {...swiperOption}

                            className="mySwiper"
                        >
                            {
                                data.pic?.map((item, index) => {
                                    return <SwiperSlide key={index}>
                                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} target='_blank' style={{ width: "100%" }} />
                                    </SwiperSlide>
                                })
                            }

                        </Swiper>
                    </div>
                    <div className="col-lg-6 col-12">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>Maincategory</th>
                                    <td>{data.maincategory}</td>
                                </tr>
                                <tr>
                                    <th>Subcategory</th>
                                    <td>{data.subcategory}</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>{data.brand}</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>
                                        {data.color?.map((item, index) => {
                                            return <button key={index} onClick={() => setSelected({ ...selected, color: item })} className={`btn ms-1 ${selected.color === item ? 'btn-primary' : `btn-light`}`}>{item}</button>
                                        })}
                                    </td>
                                </tr>
                                {/* <tr>
                                    <th>{fieldType.charAt(0).toUpperCase() + fieldType.slice(1)}</th>
                                    <td>
                                        {data[fieldType]?.map((item, index) => {
                                            return <button key={index} onClick={() => setSelected({ ...selected, option: item })} className={`btn ms-1 ${selected.option === item ? 'btn-primary' : `btn-light`}`}>{item}</button>
                                        })}
                                    </td>
                                </tr> */}
                                <tr>
                                    <th>Measurment</th>

                                    <td>
                                        {data.size?.map((item, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelected({ ...selected, option: item })}
                                                    className={`btn ms-1 ${selected.option === item ? 'btn-primary' : 'btn-light'}`}
                                                >
                                                    {item}
                                                </button>
                                            )
                                        })}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>Stock</th>
                                    <td>{data.stockQuantity ? `${data.stockQuantity} Left in stock` : `Out of stock`}</td>
                                </tr>
                                <tr>
                                    <th colSpan={2}>
                                        {
                                            data.stockQuantity ?
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="btn-group w-100">
                                                            <button onClick={() => setSelected({ ...selected, quantity: selected.quantity > 1 ? selected.quantity - 1 : selected.quantity })} className='btn btn-primary ms-3' ><i className='bi bi-dash'></i></button>
                                                            <h4 className='w-50 text-center'>{selected.quantity}</h4>
                                                            <button onClick={() => setSelected({ ...selected, quantity: selected.quantity < data.stockQuantity ? selected.quantity + 1 : selected.quantity })} className='btn btn-primary me-3' ><i className='bi bi-plus'></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="btn-group">
                                                            <button className='btn btn-primary' onClick={addToCart}><i className={`pe-3 bi ${cartItem ? 'bi-cart-check' : 'bi-cart-plus'} `}></i>Add to cart</button>
                                                            <button className='btn btn-secondary' onClick={addToWishlist}><i className={`pe-3 bi-heart-fill ${wishlistItem ? 'text-danger' : 'text-light'}`}></i>Add to wishlist</button>
                                                        </div>
                                                    </div>
                                                </div> :
                                                <div className="text-center">
                                                    <button className='btn btn-secondary' onClick={addToWishlist}><i className={`pe-3 bi-heart-fill ${wishlistItem ? 'text-danger' : 'text-light'}`}></i>Add to wishlist</button>
                                                </div>
                                        }
                                    </th>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>
                                        <div dangerouslySetInnerHTML={{ __html: data.description }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ProductSlider maincategory='Related Products' data={relatedData} />

        </>
    )
}
