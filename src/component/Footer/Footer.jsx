import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="title">Diyor Front-End</div>
            <div className='desc'>
                Salom bu meni shaxsiy site faqat men qahimda malumotlarni umumlashtirish uchun yozildi men bulan aloqa
            </div>
            <div className="icons">
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-telegram-plane"></i>
            </div>
            <p>
                <b>&copy;</b> Hamma malumotlar asosli
            </p>
        </div>
    )
}

export default Footer
