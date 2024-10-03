import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
    const [y,setY] = useState(window.scrollY);
    const [totalY, setTotalY] = useState(0);
    const [scrollBar,setScrollBar] = useState(window.innerHeight);

    useEffect(() => {
        const handleScroll = () => setY(window.scrollY);
        window.addEventListener('scroll',handleScroll);
        const element = document.getElementById('body');
        setTotalY(element.scrollHeight);
        setScrollBar(window.innerHeight);

        return() => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    const scroll = totalY ? `${((y + scrollBar) / totalY) * 100}%` : '0%';
  return (
    <div>
        <div className='progressBar' style={{ width: scroll}}></div>
        <div id='body' className='container'>
            
        </div>
    </div>
  )
}

export default ProgressBar
