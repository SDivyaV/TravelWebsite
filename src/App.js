import './App.css';
import React from 'react'
import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Book from './Book';


const App = () => {
  return (
    <div className='app'>
      <ProgressBar />
      <Router>
        <Navbar />  {/* This will always be displayed */}
        <Routes>    {/* This switches the page content */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

