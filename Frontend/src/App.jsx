import AboutPage from "./Landing_Page/about/AboutPage"
import HomePage from "./Landing_Page/home/HomePage"
import PricingPage from "./Landing_Page/pricing/PricingPage"
import SupportPage from "./Landing_Page/support/SupportPage"
import Product from "./Landing_Page/product/Productall";
import Singup from "./Landing_Page/signup/Singup";
import Login from "./Landing_Page/Login/Login";
import Footer from './Componets/Footer';
import Navber from "./Componets/Navber";
import PageNotFound from "./Componets/Notfound";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {


  return (
    <BrowserRouter>
      <Navber />
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        {/* <Route path="/signup" element={<Singup />}></Route> */}
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
          {/* <Route path="/Login" element={<Login />}></Route> */}
          <Route path="*" element={<PageNotFound/>}> </Route>

      </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default App;
