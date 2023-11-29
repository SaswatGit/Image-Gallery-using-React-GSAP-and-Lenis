import React from 'react'
import "./css/About.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo("#about .left", { x: "-100%", opacity: 0 }, {
      opacity: 1, x: 0, scrollTrigger: {
        trigger: "#about .left",
        start: "center center",
      }
    });
    gsap.fromTo("#about .right div:nth-child(1)", { x: "100%", opacity: 0 }, {
      opacity: 1, x: 0, scrollTrigger: {
        trigger: "#about .right div:nth-child(1)",
        start: "top center",
      }
    });
    gsap.fromTo("#about .right div:nth-child(2)", { x: "100%", opacity: 0 }, {
      opacity: 1, x: 0, scrollTrigger: {
        trigger: "#about .right div:nth-child(2)",
        start: "top center",
      }
    });
    gsap.fromTo(".left h1", { rotationX: 0 }, { rotationX: 360, repeat: -1, repeatDelay: 2, transformOrigin: "50% 50%" });
    gsap.fromTo(".right div:nth-child(1) h1", { rotationX: 0 }, { rotationX: 360, repeat: -1, repeatDelay: 2, transformOrigin: "50% 50%" });
    gsap.fromTo(".right div:nth-child(2) h1", { rotationX: 0 }, { rotationX: 360, repeat: -1, repeatDelay: 2, transformOrigin: "50% 50%" });
  });
  return (
    <section id="about">
      <h1 id='name'>ABOUT</h1>
      <div className='left'>
        <h1>Capturing Moments, Creating <span>Memories</span></h1>
        <p>Hello there! I'm Devid, the eye behind ImageGal. I'm thrilled to welcome you to my corner of the web, where I share my passion for storytelling through captivating images.</p>
      </div>
      <div className='right'>
        <div>
          <h1>The Story Behind the <span>Nature-Gallery</span></h1>
          <p>Ever since I picked up my first camera, I knew I had discovered my lifelong love. Photography, for me, is more than just a profession; it's a way of seeing and experiencing the world. My goal is to freeze moments in time, turning them into everlasting memories.</p>
        </div>
        <div>
          <h1>Why <span>Photography?</span></h1>
          <p>Photography, to me, is a powerful form of expression. It goes beyond the technicalities of composition and lighting; it's about emotion, connection, and the beauty found in the everyday. I strive to capture not just images but the essence of the moment - the laughter, the joy, the quiet beauty that often goes unnoticed.</p>
        </div>
      </div>
    </section>
  )
}

export default About