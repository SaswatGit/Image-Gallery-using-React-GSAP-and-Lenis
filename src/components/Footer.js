import React from 'react'
import './css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='foot-title'>
        <h3>Nature-Gallery</h3>
      </div>
      <div className='contact'>
        <p><i className='fa-solid fa-envelope'></i> naturegallery@gmail.com</p>
        <p><i className='fa-solid fa-phone'></i> 9836770927</p>
        <p><i className='fa-solid fa-location'></i> Dhenkanal, Odisha</p>
      </div>
    </footer>
  )
}

export default Footer