import { Link } from "react-router-dom";
import "../styles/header.css";
import "../styles/Mobile.css";
import { useEffect, useRef } from "react";

function Header({params}) {
    const headerRef = useRef();
    const reload = () =>{
        window.history.pushState(null,null, "/");
        window.dispatchEvent(new Event('popstate'))
    }
    useEffect(()=>{
        const links = headerRef.current.querySelectorAll(".rightHeader > *");
        const path = {
            [0]:"home",
            [1]: "produto",
            [2]:"contacto"
        }
        
        params !== null?(
            links[params].className = path[params]
        ) : (
            console.log("Erro Caminho não espicificado Header!")
        )

    },[]);

    const openMenu = ()=>{
        let mobileMenu = headerRef.current.querySelector(".mobileMenu");
        mobileMenu.classList.add('active');
    }
    const closeMenu = ()=>{
        headerRef.current.querySelector(".mobileMenu").classList.remove('active');
    }

    //Rendering 
    return(
        <nav className="header" ref={ headerRef }>
            <div className="logo" onClick={reload}>
                <h1>HM</h1>
            </div>
            
            <div className="rightHeader">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/produtos">
                    <span >Produtos</span>
                </Link>
                <Link to="/contacto">
                    <span>Contacto</span>
                </Link>
            </div>
            {/* Mobile */}
            <div className="mobileMenu">
                <ul>
                    <li onClick={closeMenu}>Fechar</li>
                    <Link to={"/"} className="linkMobille">
                        <li>Home</li>
                    </Link>
                    <Link to={"/produtos"} className="linkMobille">
                        <li>Produtos</li>
                    </Link>
                    <Link to={"/contacto"} className="linkMobille">
                        <li>Contacto</li>
                    </Link>
                </ul>
            </div>

            <div className="menu">
                <button onClick={openMenu}><i className="bi bi-menu-button"></i></button>
            </div>
        </nav>
    )
}

export default Header;
