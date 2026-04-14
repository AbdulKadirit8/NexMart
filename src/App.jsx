import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}
