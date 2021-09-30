import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import manBg from './img/man-bg.png'
import Reveal from 'react-reveal';

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <Reveal effect='textLeftAnim' duration={1200}>
                    <div className="home__data">
                        <span className="greating">
                            Salom men ismim
                        </span>
                        <h1>Diyorbek</h1>
                        <span className='developer'>Front-End dasturchiman</span>
                        <Link to='/about'>Batavsil</Link>
                    </div>
                </Reveal>
                <div className="socal__icons">
                    <Reveal effect='textLeftAnimIcon' duration={2000}>
                        <a target="_blank" href='https://t.me/Diyor1023' > <i className="fab fa-instagram"></i> </a>
                    </Reveal>
                    <Reveal effect='textBottomAnimIcon' duration={2000}>
                        <a target="_blank" href='https://t.me/Diyor1023' > <i className="fab fa-telegram-plane"> </i></a>
                    </Reveal>
                    <Reveal effect='textRightAnimIcon' duration={2000}>
                        <a target="_blank" href='https://t.me/Diyor1023' > <i className="fab fa-facebook-f"></i> </a>
                    </Reveal>
                </div>
            </div>
            <Reveal effect='textRightAnim' duration={1500}>
                <img className='back__man' src={manBg} alt="man" />
            </Reveal>
        </header>
    )
}

export default Header
