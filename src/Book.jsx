import React, { useState } from 'react'
import img3 from './Images/img3.jpg'
import './Book.css'

const Book = () => {
  const [isSubmit,setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  }

  return (
    <>
      <div className='book-menu'>
        <img src={img3} className='book-image' />
        <div className='info'>
          <h5>
          Thank you for choosing TRVLWORLD! We're excited to help you plan your next adventure.
          Ready to get started? Let us know your preferred destination or package, and we’ll handle the rest! If you need help at any step of the process, don’t hesitate to reach out to one of our travel experts. We're here to make booking with TRVLWORLD simple and stress-free!
          </h5>
        </div>
      </div>
      <div className='fill-form'>
          <h3>Fill the form below to make us let you know more</h3>
          {isSubmit ? (
            <p className='success'>Form Submitted Successfully!</p>
          ):(
            <form className='details' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Name' required />
            <input type='text' placeholder='Enter Email' required />
            <input type='number' placeholder='+91 | Phone Number' required />
            <input type='text' placeholder='Preferred Destination' required />
            <input type='number' placeholder='No. of people' required/>
            <label for='package'>Choose Package:</label>
            <select name='package' id='package'>
              <option value='package1'>Family Package</option>
              <option value='package2'>Group Package</option>
              <option value='package3'>Solo Travel</option>
            </select>
            <button>Submit</button>
          </form>
          )}
        </div>
    </>
  )
}

export default Book
