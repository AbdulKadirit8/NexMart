import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";
import FeaturePage from "./Pages/FeaturePage";
import FAQPage from "./Pages/FAQPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ErrorPage from "./Pages/ErrorPage";
import PrivacyPage from "./Pages/PrivacyPage";
import TermPage from "./Pages/TermPage";
import Testimonial from "./Components/Testimonial";
import TestimonialPage from "./Pages/TestimonialPage";

export default function App() {
  return (
    <>
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/feature' element={<FeaturePage />}></Route>
          <Route path='/faq' element={<FAQPage />}></Route>
          <Route path='/contactus' element={<ContactUsPage />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPage />}></Route>
          <Route path='/terms' element={<TermPage />}></Route>
          <Route path='/testomonials' element={<TestimonialPage />}></Route>


          <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </>
  )
}
