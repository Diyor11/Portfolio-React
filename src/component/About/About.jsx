import React from 'react';
import './about.scss';
import man from './img/man.jpg';
import Reveal from 'react-reveal';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div id="about">
            <Reveal effect='textTopAnim' duration={1200}>
                <h2 className="page-header"> Men haqimda! </h2>
            </Reveal>
            <Reveal effect='textBottomAnim' duration={1200}>
                <h4 className='sub__title'>Men kim</h4>
            </Reveal>
            <div className="about__main container">
                <div className="left__side">
                    <img src={man} alt="man" />
                </div>
                <div className="right__side">
                    <Reveal effect='textTopAnim' duration={1200}>
                        <h3>Men Diyor <span>Front End</span> dasturchi</h3>
                    </Reveal>
                    <Reveal effect='textRightAnim' duration={1200}>
                        <p>
                            Assalomu Aleykum xush kelibsiz! O'zim haqimda qisqacha: Meni Qarshiboyev Diyorbek 
                            yoshim o'n to'qqizda 2020 yilning 28 noyabrdan beri dasturlash bilan mustaql shug'ullanib kelaman
                            mustaqil o'rganish qiyinchilik tug'dirmaydi sababi ingliz tilini bilaman ( Pre-Intirmidite )
                            shuningdek<span> HTML, CSS, Bootstrap, Sass, JavaScript, React, Redux, Redux-thunk, Rest Api</span> bilaman,
                            hech qayerda ishlamayman hozircha faqat o'rganyapman va amaliyot uchun ish qidiryapman
                            men bilan faqat Telegram orqali aloqaga chiqish mumkun
                        </p>
                    </Reveal>
                    <Reveal effect='textBottomAnim' duration={1200}>
                        <Link to='/portfolio'>Portfolio</Link>
                    </Reveal>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
