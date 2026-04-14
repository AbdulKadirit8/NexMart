import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Feature from '../Components/Feature'
import FAQ from '../Components/FAQ'


export default function FeaturePage() {
  return (
    <>
        <Breadcrum pageTitle={"Our Features"} pageDescription={"Discover NexMart features designed to enhance your shopping experience, including secure payments, fast delivery, easy returns, quality products, smart search, and reliable customer support for smooth and stress-free online shopping."} />
       <Feature />
       <FAQ />
    </>
  )
}
