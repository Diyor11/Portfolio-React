import React from 'react';
import './portfolio.scss';
import Card from '../Card/Card';
import { cardInfo } from '../Data/cardInfo';
import Reveal from 'react-reveal'
import Footer from '../Footer/Footer';

const renderProject = (item, index) => (
    <div className="row py-4" key={index} >
        <div className="col-md-6">
            <div className="img__wrap">
                <img src={item.image} alt={item.title} />
            </div>
        </div>
        <div className="col-md-6">
            <div className="info__wrap">
                <Reveal effect='textTopAnim' duration={1200}> <h3>{item.title}</h3> </Reveal>
                <Reveal effect='textBottomAnim' duration={1200}> <p> {item.desc} </p> </Reveal>
                <div className="buttons">
                    <a target="_blank" href={item.demo} className="demo">Demo <i className="fas fa-globe-americas"></i></a>
                    <a target="_blank" href={item.source} className="source">Source <i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
)

const Portfolio = () => {
    return (
        <div id="portfolio">
            <Reveal effect='textTopAnim' duration={1200}>
                <h2 className="page-header"> Portfolio </h2>
            </Reveal>
            <Reveal effect='textBottomAnim' duration={1200}>
                <h4 className='sub__title'>Loyihalarimni ko'rib chiqing</h4>
            </Reveal>
            <div className="container mt-4">
                <Card 
                    data={cardInfo}
                    renderBody={renderProject}
                />

            </div>
            <Footer />
        </div>
    )
}

export default Portfolio
