import React from 'react'

import SingleProduct from './SingleProduct';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';

export default function ProductSlider({ maincategory, data }) {
    let option = {
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            440: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        modules: [Autoplay],
        loop:true
    }
    return (
        <section id="services" className="services ">
            <div className="container">
                {
                    maincategory==='Related Products'?
                    <h4>Related Products</h4>:
                    <h4 className='text-center'>Check Out Latest Product Of <span className='text-primary'>{maincategory}</span></h4>
                }
                <Swiper className="mySwiper" {...option}>
                    {
                        data.map((item, index) => {
                            return <SwiperSlide key={index}>
                                <SingleProduct item={item} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}
