import { Link } from "react-router-dom";
import "../styles/Container.css";
import "../styles/Animations.css";
import userImage from "../img/img1.png";
function Container(){
    return (
        <section className="container">
            <div className="leftContainer">
                <h1>Helton Massete|</h1>
                <h2>Marketing de Redes</h2>
                <h3>Tranformando vidas e Carreiras</h3>
                <br />
                <span>Bem-vindo à <b>Helton Massete</b> Marketing de Redes, onde ajudamos pessoas como você a alcançarem seus sonhos financeiros e profissionais. Com uma abordagem centrada nas pessoas, oferecemos uma oportunidade única de construir um negócio próprio, sem limites para o seu potencial de ganhos.
                </span>
                <div className="buttons">
                    <Link to={"sobre"}>
                        <button className="aboutButton">Sobre</button>
                    </Link>
                    <Link to={"contacto"}>
                        <button className="contactButton">Fale Comigo</button>
                    </Link>
                </div>
            </div>
            <div className="rithContainer">
                <img src={userImage} alt="image" />
            </div>
            <div className="links">
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-whatsapp"></i></a>
                <a href=""><i className="bi bi-tiktok"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
            </div>
        </section>
    )
}
export default Container;