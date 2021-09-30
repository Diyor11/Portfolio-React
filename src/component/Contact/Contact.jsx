import React from 'react'
import Reveal from 'react-reveal';
import Card from '../Card/Card';
import data from '../Data/data.json';
import './contact.scss';
import Footer from '../Footer/Footer'

const renderInfoCards = (item, index) => (
    <a href={item.link}target="_blank" className="mt-4 col-md-3 col-sm-6" key={index}>
        <div className="wrapper">
            <i className={item.icon}></i>
            <h4>{item.name}</h4>
            <p>{item.info}</p>
        </div>
    </a>
)

const Contact = () => {
    return (
        <div id='contact'>
            <Reveal effect='textTopAnim' duration={1200}>
                <h2 className="page-header">Aloqa</h2>
            </Reveal>
            <Reveal effect='textBottomAnim' duration={1200}>
                <h4 className="sub__title">
                    Men bilan bog'laning
                </h4>
            </Reveal>
            <div className="us-cards container">
                <div className="row">
                    <Card 
                        data={data.infoCard}
                        renderBody={renderInfoCards}
                    />
                </div>
            </div>
            <div className="inputs__group mt-5">
                <div className="container">
                    <div className="row">
                        <a target="_blank" href="https://t.me/Diyor1023" className="col-6">
                            <input type="text" className='name' placeholder='Ismingiz'/>
                        </a>
                        <a target="_blank" href="https://t.me/Diyor1023" className="col-6">
                            <input type="text" placeholder='e-mail' className='email' />
                        </a>
                    </div>
                    <div className="row mt-3">
                        <a target="_blank" href="https://t.me/Diyor1023" className="col-6">
                            <input type="text" className='title' placeholder='Sarlavha'/>
                        </a>
                        <a target="_blank" href="https://t.me/Diyor1023" className="col-6">
                            <input type="text" className='number' placeholder='Raqam'/>
                        </a>
                    </div>
                    <div className="row mt-3">
                        <a target="_blank" href="https://t.me/Diyor1023" className="col-12">
                            <textarea />
                        </a>
                        <div className="col-12">
                            <a target="_blank" href="https://t.me/Diyor1023" className="btn btn-outline-dark fs-5 fs-sm-6 mt-2 px-4 py-2 ">Jo'natmoq <i className='fab fa-telegram-plane'></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
