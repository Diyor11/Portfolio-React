import React, { useState } from 'react';
import './navbar.scss';
import Reveal from 'react-reveal/Reveal';
import data from '../Data/data.json';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [show, setShow] = useState(false);
 

    return (
        <nav id='nav'>
                <div className="nav__wrapper">
                <div className="nav__brand">
                    <span>Diyor<b>DEV</b></span>
                </div>
                <Reveal effect='textBottomAnim' duration={1000}>
                    <div className="nav__toggle">
                        <i className={`fas ${show ? 'fa-times':'fa-bars'}`} onClick={() => setShow(!show)}></i>
                    </div>
                </Reveal>
            <ul className={`nav__links ${show ? 'show':''}`}>
                {
                    data.nav__items.map((item, index) => (
                        <Reveal key={index} effect='textBottomAnimIcon' duration={(index*500) + 1000}>
                            <li onClick={() => setShow(!show)}><Link  to={item.route}>{item.name}</Link></li>
                        </Reveal>
                    ))
                }
            </ul>
                </div>
        </nav>
    )
}

export default NavBar
