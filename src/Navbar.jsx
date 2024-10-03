import React from 'react'
import './Navbar.css'
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='title'>TRVLWORLD <ModeOfTravelIcon className='trvl-icon' style={{ fontSize: '20px' }}/></h1>
      <div className='links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/book'>Book</Link>  
        </li>
      </div>
    </div>
  )
}

export default Navbar
