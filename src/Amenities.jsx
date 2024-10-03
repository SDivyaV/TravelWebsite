import React, { useState } from 'react'
import './Amenities.css'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import WeekendIcon from '@mui/icons-material/Weekend';
import LuggageIcon from '@mui/icons-material/Luggage';

const Amenities = () => {

    const [clicked,setClicked] = useState(null);

    const handleClick = (icon) => {
        setClicked(icon);

        setTimeout(() => setClicked(null),500)
    }
  return (
    <div className='menu'>
      <h2>Amenities Provided</h2>
      <div className='card'>
      <div
            className={`icon-box ${clicked === 'flight' ? 'animate' : ''}`}
            onClick={() => handleClick('flight')}>
            <FlightTakeoffIcon />
            <span>Priority boarding</span>
      </div>
      <div
            className={`icon-box ${clicked === 'restaurant' ? 'animate' : ''}`}
            onClick={() => handleClick('restaurant')}>
            <RestaurantIcon />
            <span>Meals</span>
      </div>
      <div
            className={`icon-box ${clicked === 'network' ? 'animate' : ''}`}
            onClick={() => handleClick('network')}>
            <NetworkWifiIcon/>
            <span>Wi-Fi</span>
      </div>
      <div
            className={`icon-box ${clicked === 'airline' ? 'animate' : ''}`}
            onClick={() => handleClick('airline')}>
            <AirlineSeatReclineExtraIcon />
            <span>Extra Legroom</span>
      </div>
      <div
            className={`icon-box ${clicked === 'weekend' ? 'animate' : ''}`}
            onClick={() => handleClick('weekend')}>
            <WeekendIcon />
            <span>Lounge Access</span>
      </div>
      <div
            className={`icon-box ${clicked === 'luggage' ? 'animate' : ''}`}
            onClick={() => handleClick('luggage')}>
            <LuggageIcon />
            <span>Luggage handling</span>
      </div>
      </div>
    </div>
  )
}

export default Amenities
