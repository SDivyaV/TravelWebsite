import React from 'react'
import ImageSlider from './ImageSlider';
import Amenities from './Amenities';
import Footer from './Footer'

const Home = () => {
  const images = [
    'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16704326/pexels-photo-16704326/free-photo-of-sunset-in-the-grand-canal-of-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1128416/pexels-photo-1128416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/259585/pexels-photo-259585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
  return (
    <div>
      <ImageSlider images={images} />
      <Amenities />
      <Footer />
    </div>
  )
}

export default Home
