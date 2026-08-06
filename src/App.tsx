import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import CorporateTraining from './pages/CorporateTraining'
import Trainers from './pages/Trainers'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-white text-slate-800 antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/corporate" element={<CorporateTraining />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
