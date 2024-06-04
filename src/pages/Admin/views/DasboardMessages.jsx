import { useEffect, useRef, useState } from "react";
import Menubar from "../components/Menubar";
import Inbox from "../../../assets/components/Inbox";
import "../styles/MessageInbox.css";

function DashProducts(params) {
    const [navBar, setNavbar] = useState(true);
    const [container , setContainer] = useState();
    const header = useRef();

    useEffect(()=>{
        setContainer(<Inbox />);
    },[]);
    //NavBar control//
    const toggleBar = ()=>{
        setNavbar((beffore) => !beffore);
    }
  
    return (
        <section className="dashBoardContainer">
            <div className="menuBar">
               {navBar == true? (<Menubar className={"active"} render={1}/>):(<Menubar render={1}/>)}
            </div>
            <div className="bodyContainer">
                    <header ref={header}>

                        <button className="toogleButton" onClick={toggleBar}>
                            <i className="bi bi-list"></i>
                        </button>
                       
                        <h1>@inbox</h1>
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