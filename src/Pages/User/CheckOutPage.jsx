import React from 'react'
import useSetting from '../../hooks/useSetting'
import Breadcrum from '../../Components/Breadcrum'

export default function CheckOutPage() {
    let settingData=useSetting()
  return (
    <>
        <Breadcrum pageTitle={`Place Order`} pageDescription={`Complete your purchase securely on ${settingData.siteName}. Review your order details, select a delivery address, choose your preferred payment method, and confirm your order with confidence. Enjoy a fast, safe, and hassle-free checkout experience designed to get your favorite products delivered right to your doorstep.`} />
    </>
  )
}
