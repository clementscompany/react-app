import image from "../img/avatar.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/Menubar.css";
function Menubar({className, render}) {
    const navBar = useRef();
    useEffect(()=>{
        let listS = navBar.current.querySelectorAll(".list");
        if (render !== null) {
            listS[render].classList.add("render");
        }
    },[className])

    //voltar//
    const homePage = ()=>{
        window.history.pushState(null,null, "/admin");
        window.dispatchEvent(new Event('popstate'));
    }
    return(
        <nav className={"navMenuBar " + className} ref={navBar}>
            <ul>
                <li className={"topMenubar " + className} onClick={homePage}>
                    <img src={image} alt="image" className="imgUser" />
                    <span>
                        <small className="nameUser">Admin</small>
                        <small className="nameUser">Painel Administrativo</small>
                    </span>
                </li>

                <Link to={"/admin/produtos"}>
                    <li className={"list " + className}>
                        <i className="bi bi-box2-fill"></i><span>Produtos</span>
                    </li>
                </Link>

                <Link to={"/admin/messages"}>
                    <li className={"list " + className}>
                        <i className="bi bi-chat-dots"></i><span>Mensagens</span>
                    </li>
                </Link>

                <Link to={"/admin/medias"}>
                    <li className={"list " + className}>
                        <i className="bi bi-globe2"></i><span>Reses Sociais</span>
                    </li>    
                </Link>

                <Link to={"/admin/images"}>
                    <li className={"list " + className}>
                        <i className="bi bi-image"></i><span>imagens</span>
                    </li>
                </Link>


                <li className={"list logOut " + className}>
                    <i className="bi bi-door-open-fill"></i><span>Sair</span>
                </li>
            </ul>
        </nav>
    );
}
export default Menubar;