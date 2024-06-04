import React from 'react';
import waveImage from '../img/wave.svg';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <img src={waveImage} alt="image" />

            <div id="footer_items">
                <span id="copyright">
                    &copy; 2024 MoisesDeveloper
                </span>

                <div className="social-media-buttons">
                    <a href="">
                        <i className="bi bi-whatsapp"></i>
                    </a>

                    <a href="">
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a href="">
                        <i className="bi bi-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
