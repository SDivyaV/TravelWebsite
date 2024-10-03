import React, { useState } from 'react'
import './About.css'
import img2 from './Images/img2.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const About = () => {

  const [isOpen,setIsOpen] = useState([false,false]);

  const questions = [
    {answers: 'Booking with us is easy! You can browse our website for pre-designed packages or contact our travel experts for a customized itinerary. Once you’ve selected your trip, simply follow the booking steps online, or reach out to us via phone or email for personalized assistance.'},
    {answers: 'We offer trips to a wide range of global destinations, including popular tourist hotspots, off-the-beaten-path adventures, and everything in between. Whether you want to explore Europe, Asia, Africa, the Americas, or remote islands, we’ve got you covered!'},
    {answers: 'We accept a variety of payment methods, including major credit cards, bank transfers, and online payment platforms. Flexible payment plans are also available for certain packages.'},
    {answers: 'Yes, we offer special rates and discounts for group bookings, depending on the destination and size of the group. Please reach out to our team for specific details.'},
  ]

  const handleQuestions = (index) => {
    const nowIsOpen = [...isOpen];
    nowIsOpen[index] = !nowIsOpen[index];
    setIsOpen(nowIsOpen);
  }

  return (
    <>
    <div className='about-us'>
    <img src={img2} className='img' />
    <div className='text'>
      <h5>
      Welcome to TRVLWORLD, your trusted partner in crafting unforgettable journeys around the world. 
      Whether you’re dreaming of a serene beach getaway, an adventurous expedition, or a cultural exploration, 
      we are here to turn your travel aspirations into reality. With years of experience and a passion for 
      travel, our team of dedicated professionals ensures that every aspect of your trip is meticulously 
      planned and perfectly executed. 
      From luxurious vacations to budget-friendly excursions, TRVLWORLD 
      Travels offers personalized itineraries, exclusive deals, and round-the-clock support to make your 
      travel seamless and worry-free. Let us take care of the details, so you can focus on creating memories 
      that last a lifetime.
      </h5>
    </div>
  </div>
  <div className='question'>
        <h4 className='text-heading'>FAQ</h4>
        <div className='faq'>
          <h5 className='q'>How do I book a trip with TRVLWORLD Travels?</h5>
            <button onClick={() => handleQuestions(0)}>
              {isOpen[0] ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}
            </button>
        </div>
        {isOpen[0] && (
          <div className={`ans ${isOpen[0] ? 'open':''}`}>{questions[0].answers}</div>
        )}
  </div>
  <div className='question'>
        <div className='faq'>
          <h5 className='q'>What destinations do you offer?</h5>
            <button onClick={() => handleQuestions(1)}>
              {isOpen[1] ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}
            </button>
        </div>
        {isOpen[1] && (
          <div className={`ans ${isOpen[1] ? 'open':''}`}>{questions[1].answers}</div>
        )}
  </div>
  <div className='question'>
        <div className='faq'>
          <h5 className='q'>What payment methods do you accept?</h5>
            <button onClick={() => handleQuestions(2)}>
              {isOpen[2] ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}
            </button>
        </div>
        {isOpen[2] && (
          <div className={`ans ${isOpen[2] ? 'open':''}`}>{questions[1].answers}</div>
        )}
  </div>
  <div className='question'>
        <div className='faq'>
          <h5 className='q'>Are there any group discounts?</h5>
            <button onClick={() => handleQuestions(3)}>
              {isOpen[3] ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}
            </button>
        </div>
        {isOpen[3] && (
          <div className={`ans ${isOpen[3] ? 'open':''}`}>{questions[1].answers}</div>
        )}
  </div>
  </>
  )
}

export default About

