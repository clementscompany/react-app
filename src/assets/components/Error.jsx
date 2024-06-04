import "../styles/Error.css";
function Error({message,className}) {
    return(
        <div className={"errorCard " + className}>
            {message}
        </div>
    );
}
export default Error;