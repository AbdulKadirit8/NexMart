import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Feature from '../Components/Feature'
import FAQ from '../Components/FAQ'
import useSetting from '../hooks/useSetting'


export default function FeaturePage() {
  const settingData=useSetting()
  return (
    <>
        <Breadcrum pageTitle={"Our Features"} pageDescription={`Discover ${settingData.siteName} features designed to enhance your shopping experience, including secure payments, fast delivery, easy returns, quality products, smart search, and reliable customer support for smooth and stress-free online shopping.`} />
       <Feature />
       <FAQ />
    </>
  )
}
