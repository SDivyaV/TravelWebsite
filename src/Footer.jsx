import React from 'react'
import './Footer.css'

import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const handleSubmit = () => {
        alert('Submit button Clicked!')
    }
  return (
    <div className='footer'>
    <h1 className='title'>TRVLWORLD <ModeOfTravelIcon className='trvl-icon' style={{ fontSize: '20px'}}/></h1>
    <h3 className='heading'>Subscribe to our Newsletter</h3>
    <form className='newsletter' onSubmit={handleSubmit}>
        <div className='input-container-footer'>
            <input type='text' placeholder='Enter Yor Email' />
            <button type='submit'>Submit</button>
        </div>
    </form>
    <h4 className='sub-heading'>Connect with Us</h4>
        <div className='icons'>
            <InstagramIcon />
            <XIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
        <div className='copyright'>
            <h5>Copyright@TRVLWORLD2024</h5>
        </div>
    </div>
  )
}

export default Footer
