import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import About from '../Components/About'
import Feature from '../Components/Feature'
import Testimonial from '../Components/Testimonial'
import FAQ from '../Components/FAQ'

export default function AboutPage() {
  return (
    <>
        <Breadcrum pageTitle="About Us" pageDescription="NexMart is your trusted online shopping destination for quality products at great prices. We bring convenience, variety, and fast service together, making everyday shopping simple, secure, and enjoyable for every customer."></Breadcrum>
        <About />
        <Feature />
        <Testimonial />
        <FAQ />
    </>
  )
}
