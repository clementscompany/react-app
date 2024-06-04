import React from 'react';
import chefImage from "../img/img1.png";
import avatarImage from "../img/img1.png";
import "../styles/Testimonials.css";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <img src={chefImage} id="testimonial_chef" alt="" />

            <div id="testimonials_content">
                <h2 className="section-title">
                    Depoimentos
                </h2>
                <h3 className="section-subtitle">
                    O que os clientes falam sobre nós
                </h3>

                <div id="feedbacks">
                    <div className="feedback">
                        <img src={avatarImage} className="feedback-avatar" alt="" />

                        <div className="feedback-content">
                            <p>
                                Fulana de Tal
                                <span>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </span>
                            </p>
                            <p>
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Repellat voluptatibus cumque dolor ea est quae alias necessitatibus"
                            </p>
                        </div>
                    </div>

                    <div className="feedback">
                        <img src={avatarImage} className="feedback-avatar" alt="" />

                        <div className="feedback-content">
                            <p>
                                Fulana de Tal
                                <span>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                            </p>
                            <p>
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Repellat voluptatibus cumque dolor ea est quae alias necessitatibus"
                            </p>
                        </div>
                    </div>
                </div>

                <button className="buttonSee">
                    Ver mais avaliações
                </button>
            </div>
        </section>
    );
}

export default Testimonials;
