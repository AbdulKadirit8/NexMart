import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";
import Feature from "./Pages/FeaturePage";
import FeaturePage from "./Pages/FeaturePage";
import FAQPage from "./Pages/FAQPage";

export default function App() {
  return (
    <>
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/shop' element={<ShopPage></ShopPage>}></Route>
          <Route path='/feature' element={<FeaturePage></FeaturePage>}></Route>
          <Route path='/faq' element={<FAQPage></FAQPage>}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </>
  )
}
