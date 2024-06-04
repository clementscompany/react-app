import { useEffect, useRef } from "react";
import userImage from "../img/img1.png";
import "../styles/Argument.css";
function Products(){

    const containerProdcts = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(enter=>{
                if (enter.intersectionRatio >= 0.5) {
                    enter.target.classList.add('active')
                }
            })
        },{
            threshold:[0,0.5,1]  
        })
        containerProdcts.current.querySelectorAll(".conentProducts").forEach(element => {
           observer.observe(element) 
        });
    },[])

    return(
        <>
            <section className="productsContainer" ref={containerProdcts}>
                <div className="conentProducts">
                    <div className="leftProducts">
                        <img src={userImage} alt="image" />
                    </div>
                    <div className="rigtProducts">
                        <h1>Product Name</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus sit similique deserunt assumenda repellendus sint inventore ipsam perspiciatis voluptatibus quia, incidunt id, velit modi libero tenetur minus quisquam recusandae.</span> <br/>
                        <button className="saberMaisBtton">Saber mais</button>
                    </div>
                </div>
                <div className="conentProducts containerReverse">
                    <div className="rigtProducts">
                        <h1>Product Name</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus sit similique deserunt assumenda repellendus sint inventore ipsam perspiciatis voluptatibus quia, incidunt id, velit modi libero tenetur minus quisquam recusandae.</span> <br/>
                        <button className="saberMaisBtton">Saber mais</button>
                    </div>
                    <div className="leftProducts">
                        <img src={userImage} alt="image" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Products;