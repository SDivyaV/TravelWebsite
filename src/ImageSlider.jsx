import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ImageSlider = ({images}) => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const length = images.length

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
        },3000)
        return () => clearInterval(interval)
    },[currentIndex,length])

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    }

    if(!Array.isArray(images) || images.length <= 0) {
        return null;
    }
  return (
    <div className='slider'>
      <button onClick={prevSlide} className='prev-btn'><ChevronLeftIcon /></button>
      <button onClick={nextSlide} className='next-btn'><ChevronRightIcon /></button>
      {images.map((image,index) => (
        <div className = {index === currentIndex ? 'slide active' : 'active'} key={index}>
            {index === currentIndex && (
                <img src={image} alt='images' className='image'/>
            )}
        </div>
      ))}
    </div>
  )
}

export default ImageSlider
