
import { useState } from "react";
import Menubar from "../components/Menubar";
import "../../Admin/styles/Socials.css";
function DashboardMideas(params) {
    const [menu, setMenu] = useState(true);
    const navBar = ()=>{
        setMenu((before)=> !before);
    }

    return (
        <>
           <section className="dashBoardContainer">
            <div className="menuBar">
                {menu == true ?(<Menubar className={"active"} render={2} />):(<Menubar render={2} />)}
            </div>
            <div className="bodyContainer">
                    <header>

                        <button className="toogleButton" onClick={navBar}>
                            <i className="bi bi-list"></i>
                        </button>
                        <button className="toogleButton">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                       
                        <h1>@social</h1>
                    </header>
                    <section className="contentDashBoard">
                        {/* //Container Dinamiic/// */}
                        <ul className="listSocials">
                            <li className="socials">
                                <span>
                                    <i className="bi bi-facebook"></i>
                                     facebook
                                </span>

                                <div className="cardButtons">
                                    <button><i className="bi bi-trash"></i></button>
                                    <button><i className="bi bi-pen"></i></button>
                                    <button><i className="bi bi-link"></i></button>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
        </section>
        </>
    );
}
export default DashboardMideas; 