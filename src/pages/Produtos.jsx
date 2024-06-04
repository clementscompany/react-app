import { useEffect, useState } from "react";
import Footer from "../assets/components/Footer";
import Header from "../assets/components/Header";
import Products from "../assets/components/Products";
import "../assets/styles/Container.css";
import Loader from "../assets/components/Loader";
function Produtos(){
    const [load, setLoad] = useState(true);
    useEffect(()=>{
       window.onload = () =>{
            setLoad(false)
       }
        const interval = setInterval(()=>{
            setLoad(false)
            clearInterval(interval);
        }, 200)
    },[])
    return (
        <>
            {load == true ? (
                <Loader />
            ):(
                <>
                <Header params={1}/>
                    <section className="produtosPage">
                        <Products />
                    </section>
                <Footer />
                </>
            )}
      
        </>
        
    );
}
export default Produtos;