import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './css/Layout.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Layout = () => {
    const [click, setClick] = useState(false);


    return (
        <>
            <div className="name-menu">
                <h1 id="name">Nature-Gallery</h1>
                <div onClick={() => setClick(!click)} className="menu" >
                    <GiHamburgerMenu className='hamburgermenu' />
                </div>
            </div>
            <nav className={click ? "navbar active" : "navbar"} >
                <ul id="list">
                    <li className="items">
                        <Link to='/' onClick={() => setClick(!click)}>Home</Link>
                    </li>
                    <li className="items">
                        <Link to='/gallery' onClick={() => setClick(!click)}>Gallery</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout