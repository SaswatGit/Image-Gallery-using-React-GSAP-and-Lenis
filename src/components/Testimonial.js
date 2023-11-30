import React, { useEffect, useRef } from 'react'
import './css/Testimonial.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
    const conRef = useRef(null);
    const leftBtnRef = useRef(null);
    const rightBtnRef = useRef(null);
    useEffect(() => {
        const con = conRef.current;
        const leftBtn = leftBtnRef.current;
        const rightBtn = rightBtnRef.current;
        let x = 0;
        con.style.left = x + "vw";
        rightBtn.addEventListener("click", function () {
            if (x > -160) {
                x = x - 80;
                con.style.left = x + "vw";
            }
        });
        leftBtn.addEventListener("click", function () {
            if (x < 0) {
                x = x + 80;
                con.style.left = x + "vw";
            }
        });
        gsap.fromTo(".testimonial img", { y: 0 }, { y: 10, duration: 1, yoyo: true, repeat: -1, ease: "none" });
    });
    return (
        <div id="testimonials">
            <div className='btns'>
                <i id="left-btn" ref={leftBtnRef} className="fa-solid fa-arrow-left"></i>
                <i id="right-btn" ref={rightBtnRef} className="fa-solid fa-arrow-right"></i>
            </div>
            <div id='testi-container'>
                <div id="con" ref={conRef}>
                    <div className='testimonial'>
                        <img src='https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_640.jpg' alt='img' />
                        <p>"Choosing John for our family photoshoot was a fantastic decision. The way he captured our genuine emotions and connections was truly magical. The experience was enjoyable, and the resulting photographs are treasured moments frozen in time."</p>
                        <i className="fa-solid fa-quote-right"></i>
                        <h1>Sarah</h1>
                    </div>
                    <div className='testimonial'>
                        <img src='https://cdn.pixabay.com/photo/2016/07/22/16/54/portrait-1535266_640.jpg' alt='img' />
                        <p>"John exceeded my expectations for corporate headshots. The attention to detail and ability to bring out the best in people through photography are unparalleled. Professionalism and creativity shone throughout the session."</p>
                        <i className="fa-solid fa-quote-right"></i>
                        <h1>Mark</h1>
                    </div>
                    <div className='testimonial'>
                        <img src='https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337_640.jpg' alt='img' />
                        <p>"John as our wedding photographer was a game-changer. Every shot encapsulated the beauty, emotions, and joy of our special day. John provided us with a wedding album that is not just a collection of photos but a true work of art. Grateful for memories that will last a lifetime."</p>
                        <i className="fa-solid fa-quote-right"></i>
                        <h1>Devid</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial