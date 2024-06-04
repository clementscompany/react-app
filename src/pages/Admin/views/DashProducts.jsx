import { useEffect, useRef, useState } from "react";
import Menubar from "../components/Menubar";
import TabeleProdutos from "../components/TabeleProdutos";
import FormAdd from "../components/FormAdd";
function DashProducts(params) {
    const [navBar, setNavbar] = useState(true);
    const [container , setContainer] = useState();
    const header = useRef();


    useEffect(()=>{
        setContainer(<TabeleProdutos />);
    },[]);
    //NavBar control//
    const toggleBar = ()=>{
        setNavbar((beffore) => !beffore);
    }
    const voltar = ()=>{
        setContainer(<TabeleProdutos />);
        header.current.querySelector("#backButton").classList.remove('active');
    }
    //Adicionar produto//
    const addProd = ()=>{
      setContainer(<FormAdd />)
      let backButton = header.current.querySelector("#backButton");
      backButton.classList.add('active');
    }

    return (
        <section className="dashBoardContainer">
            <div className="menuBar">
               {navBar == true? (<Menubar className={"active"} render={"0"}/>):(<Menubar render={"0"}/>)}
            </div>
            <div className="bodyContainer">
                    <header ref={header}>

                        <button onClick={voltar} className="backButton" id="backButton">
                            <i className="bi bi-arrow-left"></i>
                            Voltar
                        </button>

                        <button className="toogleButton" onClick={toggleBar}>
                            <i className="bi bi-list"></i>
                        </button>
                        <button onClick={addProd}><i className="bi bi-plus"></i>Adicionar</button>

                        <h1>Produtos</h1>
                    </header>
                    <section className="contentDashBoard">
                        {/* //Container Dinamiic/// */}
                        {container}
                    </section>
                </div>
        </section>
    );
}
export default DashProducts;