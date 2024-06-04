import Menubar from "../components/Menubar";
import image from "../img/img1.png";
import "../styles/Images.css";
function DashboardImages() {
    return (
        <>
            <section className="dashBoardContainer">
                <div className="menuBar">
                    <Menubar className={"active"} render={3}/>
                </div>
                <div className="bodyContainer">
                    <header>

                        <button className="toogleButton">
                            <i className="bi bi-list"></i>
                        </button>

                        <h1>@Images</h1>
                    </header>
                    <section className="contentDashBoard">
                        {/* //Container Dinamiic/// */}
                         <div className="containerImages">
                             <div className="image">
                                <img src={ image } alt="image"/>
                             </div>
                             <div className="image">
                                <img src={ image } alt="image"/>
                             </div>
                             <div className="image">
                                <img src={ image } alt="image"/>
                             </div>
                             <div className="image">
                                <img src={ image } alt="image"/>
                             </div>
                             <div className="image">
                                <img src={ image } alt="image"/>
                             </div>
                         </div>
                    </section>
                </div>
            </section>
        </>
    );
}
export default DashboardImages;
