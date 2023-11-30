import React, {useEffect} from 'react';
import './css/Title.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        gsap.set(".title-con:nth-child(1)", { x: "10vw" });
        gsap.set(".title-con:nth-child(2)", { x: "-10vw" });
        gsap.to(".title-con:nth-child(1)", {
            x: "-10%", scrollTrigger: {
                trigger: "#title",
                start: "top bottom",
                scrub: 1,
            }
        });
        
        gsap.to(".title-con:nth-child(2)", {
            x: "10%", scrollTrigger: {
                trigger: "#title",
                start: "top bottom",
                scrub: 1,
            }
        });
        gsap.fromTo(".img", {scale: 0.7, rotationZ: 0}, {scale: 1, rotationZ: "-10deg",duration: 0.5});
        
    });
    return (
        <section id='title'>
            <div className='title-con'>
                <h1>Hi,I am John</h1>
            </div>
            <div className='title-con'>
                <h1>Photographer</h1>
            </div>
            <img className='img' src='https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt='img' />
        </section>
    )
}

export default Hero;