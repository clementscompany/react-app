import Menubar from "../components/Menubar";
import "../styles/styles.css";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import Preview from "../components/Preview";
function Dashboard(params) {
    const [navBar, setNavBar] = useState(true);
    const [previewDash, setPReview] = useState();
    const toggleMenu = () => {
        setNavBar((prevNavBar) => !prevNavBar);
    }

    useEffect(()=>{
        setPReview(<Preview />);
    },[]);
    return(
        <>
            <section className="dashBoardContainer">
                <div className="menuBar">
                    {
                    navBar == true?
                        (<Menubar className={""} render={null}/>):
                        
                        (<Menubar className={"active"}/>)
                    }
                </div>
                <div className="bodyContainer">
                    <header>
                        <button className="toogleButton" onClick={toggleMenu}>
                            <i className="bi bi-list"></i>
                        </button>
                        <h1>DashBoard</h1>
                    </header>
                    <section className="contentDashBoard">
                        { previewDash }
                    </section>
                </div>
            </section>
        </>
    );
}
export default Dashboard;