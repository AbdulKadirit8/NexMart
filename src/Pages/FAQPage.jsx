import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import FAQ from '../Components/FAQ'

export default function FAQPage() {
  return (
    <>
        <Breadcrum pageTitle={"Frequenty Asked Questions"} pageDescription={"Find answers to common questions about orders, payments, shipping, returns, and account support at NexMart. Our FAQ section helps you shop with confidence through clear, quick, and helpful information anytime."} />
        <FAQ />
    </>
  )
}
