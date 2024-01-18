import React from 'react'
import  "./footer.css";

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Rimon Mridha</h1>

        <ul className="footer__list">
            <li><a href="#about" className="footer__link">About</a></li>

            <li><a href="#portfolio" className="footer__link">Projects</a></li>

            <li><a href="#testimonials" className="footer__link">Testimonials</a></li>
        </ul>


        <div className="footer__social">

        <a href="#r" className="footer__social-link" target="_blank"> <i className="bx bxl-linkedin"></i></a>
        <a href="#r" className="footer__social-link" target="_blank"> <i className="bx bxl-facebook"></i></a>
        <a href="#r" className="footer__social-link" target="_blank"><i className="bx bxl-instagram-alt"></i></a>
        <a href="#r" className="footer__social-link" target="_blank"><i className="bx bxl-behance"></i></a>
        <a href="#r" className="footer__social-link" target="_blank"><i className="bx bxl-github"></i></a>
        </div>
    </div>

    <span className='footer__copy'>&#169; Rimon Mridha. All rights reserved</span>
   </footer>
  )
}

export default Footer
