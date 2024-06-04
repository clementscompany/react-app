import { useEffect, useState } from "react";
import Container from "../assets/components/Container";
import Content from "../assets/components/Content";
import Footer from "../assets/components/Footer";
import Header from "../assets/components/Header";
import Loader from "../assets/components/Loader";
import Products from "../assets/components/Products";
import Testimonials from "../assets/components/Testimonials";

function Home() {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        window.onload = () => {
            setLoader(false);
        }
        const interval = setInterval(()=>{setLoader(false); clearInterval(interval)}, 300)
    }, [loader]);

    return (
        <>
            {loader ? (
                <Loader position={"fixed"} />
            ) : (
                <>
                    <Header params={0}/>
                    <Container />
                    <Content />
                    <Products />
                    <Testimonials />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;
