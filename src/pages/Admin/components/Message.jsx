function Message({image}) {
    return (
        <>
            <div className="cardUserMessages">
                
                <img src={ image } className="userSend" />
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora soluta minima laboriosam deserunt ut necessitatibus recusandae ratione animi enim voluptatibus omnis, obcaecati nostrum reprehenderit id at quisquam quo quos! Harum.
                </span>
                <button className="trashMess"><i className="bi bi-trash"></i></button>
            </div>
        </>
    );
}
export default Message;