import Breadcrum from '../Components/Breadcrum'
import Testimonial from '../Components/Testimonial'
import useSetting from '../hooks/useSetting'

export default function TestimonialPage() {
  const settingData=useSetting()
  return (
    <>
        <Breadcrum pageTitle={"Our Customers Reviews"} pageDescription={`See what our customers say about ${settingData.siteName}. Real reviews and experiences highlight our quality products, trusted service, fast delivery, and commitment to making online shopping easy, enjoyable, and dependable for everyone.`} />
        <Testimonial />
    </>
  )
}
