import { useEffect, useRef, useState } from "react";
import image from "../../assets/icons/icons/person-circle.svg";
import React from "react";
import Message from "../../pages/Admin/components/Message";

function Inbox() {
    const [message, setMessage] = useState();
    const listMessage = useRef();
    const messageModal = useRef();

    const buscarMessage = (id) => {
        messageModal.current.classList.add('active');
        setMessage(<Message image={image} />);
    }
    const selectAll = (event)=>{
        // console.log(element.target.checked);
        let boxes = listMessage.current.querySelectorAll(".checkBox");
        let deleteButton = listMessage.current.querySelector(".deleteButton");
        if (event.target.checked) { 
            deleteButton.classList.add('active');
            boxes.forEach(box => {
                box.checked = true;
            });
        } else{
            deleteButton.classList.remove('active');
            boxes.forEach(remove => {
                remove.checked = false;
            });
        }
        
    }
    useEffect(() => {
        if (message) {
            let toggleButton = messageModal.current.querySelector("#toogleButton");
            toggleButton.addEventListener("click", () => {
                messageModal.current.classList.remove('active');
                setMessage("");
            });
        }
    }, [message]);

    return (
        <>
            <ul ref={listMessage}>
                <li className="topListInbox">
                    <input type="checkbox" onClick={selectAll}/>
                    <small>Selecionar todas</small>
                    <button className="deleteButton"><i className="bi bi-trash"></i></button>
                </li>
                <li className="box"  onClick={() => buscarMessage(23)}>
                    <span>
                        <input type="checkbox" className="checkBox" hidden/>
                        <b>Moisesclemente</b>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente eum ex,</small>
                    </span>
                    <small>Data de envio: 2022-04-12: 12:45 min</small>
                </li>
                <li className="box" >
                    <span onClick={() => buscarMessage(23)}>
                        <input type="checkbox" className="checkBox" hidden/>
                        <b>Moisesclemente</b>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente eum ex,</small>
                    </span>
                    <small>Data de envio: 2022-04-12: 12:45 min</small>
                </li>
            </ul>

            <section className="MessageModal" id="MessageModal" ref={messageModal}>
                <button className="toogleButtonModal" id="toogleButton">
                    <i className="bi bi-arrow-left"></i>
                </button>
                {message}
            </section>
        </>
    );
}

export default Inbox;
