import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Testimonial from '../Components/Testimonial'

export default function TestimonialPage() {
  return (
    <>
        <Breadcrum pageTitle={"Testimonials"} pageDescription={"See what our customers say about NexMart. Real reviews and experiences highlight our quality products, trusted service, fast delivery, and commitment to making online shopping easy, enjoyable, and dependable for everyone."} />
        <Testimonial />
    </>
  )
}
