import { Link } from "react-router-dom";
function Preview(params) {
    return (
        <div className="previewDash">
            <div className="cardDash">
                <h3>Produtos Cadastrados </h3>
                <h3>122 Pcs</h3>
                <Link to={"/admin/produtos"}>
                    <button className="seeButton">Ver</button>
                </Link>
            </div>
            <div className="cardDash">
                <h3>Mensagens Recebidas </h3>
                <h3>0</h3>
                <Link>
                    <button className="seeButton">Ver</button>
                </Link>
            </div>
            <div className="cardDash">
                <h3>Imagens</h3>
                <h3>12</h3>
                <Link >
                    <button className="seeButton">Ver</button>
                </Link>
            </div>

            <div className="mediasSociales cardDash">
                <h4><b>Suas redes:</b></h4>
                <small> vê os seus contactos e medias siciais cadastradas na sua página</small><br />

                <span><b>Atualmete estão cadastradas as seguintes mídeas:</b></span>
                <ul>
                    <li><i className="bi bi-facebook"></i>facebook</li>
                    <li><i className="bi bi-whatsapp"></i>whatsapp</li>
                    <li><i className="bi bi-instagram"></i>instagram</li>
                    <li><i className="bi bi-bi bi-tiktok"></i>tiktok</li>
                </ul>

                <button className="seeButton">Ver</button>
            </div>
        </div>
    );
}
export default Preview;