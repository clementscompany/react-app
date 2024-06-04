import "../styles/Loader.css";
function Loader({position}){
  return (
    <>
        <section className={"containerLoading " +position} >
            <div className="spinner1">
                <div className="spinner2">
                    <div className="spinner3"></div>
                </div>
            </div>
        </section>
    </>
  );
}
export default Loader;