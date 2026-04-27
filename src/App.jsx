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
import TestimonialPage from "./Pages/TestimonialPage";
import ScrollToTop from "./Components/ScrollToTop";

//Admin home page
import AdminHomePage from "./Pages/Admin/AdminHomePage";

//Admin Maincategory
import AdminMainCategoryPage from "./Pages/Maincategory/AdminMainCategoryPage";
import AdminCreateMainCategoryPage from "./Pages/Maincategory/AdminCreateMainCategoryPage";
import AdminUpdateMainCategoryPage from "./Pages/Maincategory/AdminUpdateMainCategoryPage";

//Admin Subcategory
import AdminSubCategoryPage from "./Pages/Subcategory/AdminSubCategoryPage";
import AdminCreateSubCategoryPage from "./Pages/Subcategory/AdminCreateSubCategoryPage";
import AdminUpdateSubCategoryPage from "./Pages/Subcategory/AdminUpdateSubCategoryPage";



export default function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar></Navbar>
        <ScrollToTop />
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


          {/* Admin Routes */}
          <Route path='/admin' element={<AdminHomePage />}></Route>

          {/* Admin Maincategory */}
          <Route path='/admin/maincategory' element={<AdminMainCategoryPage />}></Route>
          <Route path='/admin/maincategory/create' element={<AdminCreateMainCategoryPage />}></Route>
          <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMainCategoryPage />}></Route>

          {/* Admin Subcategory */}
          <Route path='/admin/subcategory' element={<AdminSubCategoryPage />}></Route>
          <Route path='/admin/subcategory/create' element={<AdminCreateSubCategoryPage />}></Route>
          <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubCategoryPage />}></Route>
          



          <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </>
  )
}
