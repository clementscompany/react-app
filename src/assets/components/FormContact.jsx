
import "../styles/Formcontact.css";
import Links from "./Links";
import Error from "./Error";
import Footer from "./Footer"
import { useRef, useState } from "react";
function FormContact(){
    const formData = useRef();
    const [errorCard, setErrorCard] = useState();
    const prevent = (e)=>{
        e.preventDefault();
    }
    
    const sendData = ()=>{
        let e = formData.current;
        let nome = e.querySelector("#name")
        let email = e.querySelector("#email")
        let message = e.querySelector("#message")


        if (nome.value.trim() != "" && email.value.trim() != "" && message.value.trim() != "") {
            
            setErrorCard(<Error message={"Obrigado pelo seu contacto..."} className={"sucess"}/>)
            interval();

        } else{
            setErrorCard(<Error message={"Preencha todos os Campos!"} className={"error"}/>)
            interval()
        }
        function  interval() {
            const interval = setInterval(()=>{
                setErrorCard("")
                clearInterval(interval)
            }, 2000)
        }
    }

    return (
        <>
            <form className="formContact" ref={formData} onSubmit={prevent}>
                <header>
                    <h1>Contacte-me</h1>
                    <h3>Deixe o seu argumento e o seu contacto!</h3>
                    <Links />
                </header>
                    
                <div className="inputs">

                    <div className="textError">
                        {errorCard}
                    </div>

                    <div className="inputBox">
                        <label htmlFor="name">Seu nome:</label>
                        <input type="text" placeholder="Seu nome" id="name" name="nome"/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="Seu email..." name="email" id="email"/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="message">Mensagem:</label>
                        <input type="text" placeholder="Sua mensagem..." id="message" name="message"/>
                    </div>
                    <div className="sendButton">
                        <button onClick={sendData}>Enviar</button>
                    </div>
                </div>
            </form>
            <Footer/>
        </>
    );
}
export default FormContact;