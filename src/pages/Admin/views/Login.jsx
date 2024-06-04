import Response from "../components/Response";
import "../styles/Form.css";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../../variables";
function Login() {
    ///Login Functions ///
    const preventSubmit = (e)=>{
        e.preventDefault();
    }
    const sendData = async ()=>{
        console.log("botao Clicado!");
    } 

    
   
    const [response,setRsponse] = useState();
    useEffect(()=>{
        setRsponse(<h2>Login</h2>);
    },[])
    
    return (
        <section className="dashBoardContainer containerLogin">
            <form  className="formLogin" onSubmit={preventSubmit}>
                <div className="topForm">
                    <i className="bi bi-person-circle"></i>
                    <h1>Admin</h1>
                </div>
                <div className="formDataAdmin">
                    <div className="textError response">
                        <div className="response">
                            { response }
                        </div>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="username">Nome de usuario:</label>
                        <input type="text" placeholder="Digite o nome de usuario..."/>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="username">Senha:</label>
                        <input type="password" placeholder="Digite a sua senha..."/>
                    </div>
                    <div className="inputBox">
                        <button className="loginButton" onClick={sendData}>Entrar</button>
                    </div>
                </div>
            </form>
        </section>
    );
}
export default Login;