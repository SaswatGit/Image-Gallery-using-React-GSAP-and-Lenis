import React, {useEffect} from 'react';
import './css/Testititle.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Testititle = () =>{
    useEffect(()=>{
        gsap.set(".title:nth-child(2)", {x: "-50vw"});
        gsap.to(".title:nth-child(1)", {x: "-30%", scrollTrigger: {
            trigger: "#testititle",
            start: "top bottom",
            scrub: 1,
        }});
        gsap.to(".title:nth-child(2)", {x: 0, scrollTrigger: {
            trigger: "#testititle",
            start: "top bottom",
            scrub: 1,
        }});
    });
    return (
        <section id="testititle">
            <div className="title">
                <h1>Testimonials</h1>
                <h1>Testimonials</h1>
            </div>
            <div className="title">
                <h1>Testimonials</h1>
                <h1>Testimonials</h1>
            </div>
        </section>
    )
};

export default Testititle;