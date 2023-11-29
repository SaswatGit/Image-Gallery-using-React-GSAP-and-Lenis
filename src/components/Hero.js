import React from 'react';
import './css/Hero.css';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.set(".scroll1", { rotationZ: "-5deg" })
    gsap.set(".scroll2", { rotationZ: "-5deg" })
    gsap.to(".scroll1", {
      x: "10%", scrollTrigger: {
        trigger: "#hero",
        start: "1% top",
        scrub: 0.5,
      }
    });
    gsap.to(".scroll2", {
      x: "-10%", scrollTrigger: {
        trigger: "#hero",
        start: "1% top",
        scrub: 0.5,
      }
    });
    gsap.to("#hero #info #head .rot", { rotationX: 360, duration: 2, ease: "elastic", repeat: -1, stagger: 0.5, repeatDelay: 0.3 });

    gsap.fromTo("#hero #info .rev", { scaleX: 0, }, { scaleX: 1, duration: 1, stagger: 0.7, ease: "elastic" });

    gsap.fromTo("#img-scroll", {opacity: 0}, {opacity: 1, duration: 1});

  });
  return (
    <div id="hero">
      <div id="info">
        <p className='rev'>I am <span>Saswat</span></p>
        <h1 className='rev' id='head'><span className='rot'>P</span><span>hotog</span><span className='rot'>r</span><span>apher</span></h1>
        <p className='rev'>As a passionate photographer, I thrive on capturing moments that tell stories and evoke emotions.</p>
      </div>
      <div id="img-scroll">
        <div className='scroll scroll1' >
          <img src='https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/01/tree-736888_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2018/01/06/01/01/oak-3064187_640.jpg' alt='img' />
        </div>
        <div className='scroll scroll2' >
          <img src='https://cdn.pixabay.com/photo/2017/01/29/17/36/oak-tree-2018822_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2014/05/05/14/14/meadow-338211_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2020/05/31/04/36/investment-5241253_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2020/06/21/09/48/hill-5324149_640.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2018/01/21/01/19/tree-3095683_1280.jpg' alt='img' />
          <img src='https://cdn.pixabay.com/photo/2016/12/05/16/46/pine-1884335_640.jpg' alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Hero