import "../styles/Form.css";
import image from "../img/img1.png";
import { useRef, useState } from "react";
import Response from "./Response";
function FormAdd(){

    const formRef = useRef();
    const [response, setResponse] = useState();
    const prevent = (e)=>{
        e.preventDefault();
    }
    

     ///preview
    const preview = ()=>{
        const image = formRef.current.querySelector("#image");
        const preview = formRef.current.querySelector("#preview");
        const [files] = image.files;
        preview.src = URL.createObjectURL(files);
    }
    /// name product///

    const setNaveView = (e)=>{
        let titleProduto = formRef.current.querySelector("#titleProduto");
        titleProduto.textContent = e.target.value;
    }
    const sendSata = ()=>{
        let name = formRef.current.querySelector("#name");
        let image = formRef.current.querySelector("#image");
        let descricao = formRef.current.querySelector("#name");

        if (name.value.trim() !== "" && descricao.value.trim() !== "" && image.value !== null) {
            alert("continta");
        } else{
            setResponse(<Response message={"Preencha todos os campos!"} className={"error"}/>)
            interval()
        }

        function  interval() {
            const interval = setInterval(()=>{
                setResponse("")
    
            clearInterval(interval)
            }, 2000)
        }
    }
   

  
    return (

        <>
            <form encType="multipart/form-data" className="formProducts" ref={formRef} onSubmit={prevent}>

                <div className="preview">
                    <div className="cardProduto">
                        <div className="imagePreview">
                            <img src={image} alt="image" id="preview" />
                            <h1 id="titleProduto">Product Name</h1>
                        </div>    
                    </div>
                </div>

                <div className="data">
                    <header><h3>Cadastrar novo Produto</h3></header>
                    
                    <div className="response">{ response }</div>

                    <div className="input">
                        <label htmlFor="name">Nome do produto:</label>
                        <input type="text" placeholder="Digite o nome" id="name" name="name" onInput={setNaveView}/>
                    </div>
                    <div className="input">
                        <label htmlFor="image">Imagem do produto:</label>
                        <input type="file" name="image" id="image" onChange={preview} />
                    </div>
                    <div className="input">
                        <label htmlFor="descricao">Nome do produto:</label>
                        <textarea name="descricao" id="descricao" placeholder="Descricao do produto..."></textarea>
                    </div>

                    <button type="submit" onClick={sendSata}>Enviar</button>
                    <button type="reset">Cancelar</button>
                </div>
            </form>
        </>

    );
}
export default FormAdd;