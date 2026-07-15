import React from 'react'
import Breadcrum from '../../Components/Breadcrum'
import useSetting from '../../hooks/useSetting'


export default function OrderConformationPage() {
    let settingData=useSetting()
  return (
    <>
        <Breadcrum pageTitle={`Order Has Been Placed`} pageDescription={`Thank you for your order! Your purchase has been successfully placed and is being processed. You will receive order updates and tracking information shortly. We appreciate your trust in ${settingData.siteName} and look forward to delivering your items quickly and securely. Happy shopping!`} />
    </>
  )
}
