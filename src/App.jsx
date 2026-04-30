// React Libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
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

//Admin Brand
import AdminBrandPage from "./Pages/Brand/AdminBrandPage";
import AdminCreateBrandPage from "./Pages/Brand/AdminCreateBrandPage";
import AdminUpdateBrandPage from "./Pages/Brand/AdminUpdateBrandPage";

//Admin Feature
import AdminFeaturePage from "./Pages/Feature/AdminFeaturePage";
import AdminCreateFeaturePage from "./Pages/Feature/AdminCreateFeaturePage";
import AdminUpdateFeaturePage from "./Pages/Feature/AdminUpdateFeaturePage";

//Admin Faq
import AdminFaqPage from "./Pages/Faq/AdminFaqPage";
import AdminCreateFaqPage from "./Pages/Faq/AdminCreateFaqPage";
import AdminUpdateFaqPage from "./Pages/Faq/AdminUpdateFaqPage";

//Admin Setting
import AdminSettingPage from "./Pages/Setting/AdminSettingPage";



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
          
          {/* Admin Brand */}
          <Route path='/admin/brand' element={<AdminBrandPage />}></Route>
          <Route path='/admin/brand/create' element={<AdminCreateBrandPage />}></Route>
          <Route path='/admin/brand/update/:id' element={<AdminUpdateBrandPage />}></Route>
          
          {/* Admin Feature */}
          <Route path='/admin/feature' element={<AdminFeaturePage />}></Route>
          <Route path='/admin/feature/create' element={<AdminCreateFeaturePage />}></Route>
          <Route path='/admin/feature/update/:id' element={<AdminUpdateFeaturePage />}></Route>
          
          {/* Admin Faq */}
          <Route path='/admin/faq' element={<AdminFaqPage />}></Route>
          <Route path='/admin/faq/create' element={<AdminCreateFaqPage />}></Route>
          <Route path='/admin/faq/update/:id' element={<AdminUpdateFaqPage />}></Route>
          
          {/* Admin Setting */}
          <Route path='/admin/setting' element={<AdminSettingPage />}></Route>

          <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </>
  )
}
