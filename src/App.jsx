import React from "react"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SolutionsPage from "./components/SolutionsPage/Solutions"
import LegalNotice from "./components/LegalNotice/LegalNotice"
import HomePage from "./components/Home/HomePage"
import CookiePolicy from "./components/CookiesPolicy/Cookies"
import About from "./components/AboutPage/About"
import PrivacyTerms from "./components/TermsPage/Terms"
import FAQ from "./components/FAQs/FAQ"
import Contact from "./components/Contact/Contact"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/solutions" element={<SolutionsPage/>}></Route>
        <Route path="/legal" element={<LegalNotice/>}></Route>
        <Route path="/cookie-policy" element={<CookiePolicy/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/privacy" element={<PrivacyTerms/>}></Route>
        <Route path="/FAQ" element={<FAQ/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App