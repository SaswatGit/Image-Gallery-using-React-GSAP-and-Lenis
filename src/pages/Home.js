import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Testititle from '../components/Testititle';
import Testimonial from '../components/Testimonial';

const Home = () => {
  document.title = "ImageGal | Home";
  return (
    <>
      <Hero />
      <About />
      <Testititle />
      <Testimonial />
    </>
  )
}

export default Home