// import { useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Service from './pages/Service';
import NotFound from './pages/NotFound';
import { Route } from 'react-router-dom';
import './assets/css/style.css'

import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/project" element={<Project />}/>
              <Route path="/service" element={<Service />}/>
              <Route path="*" element={<NotFound />}/>

            </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
