import "../styles/Tabele.css";
function TabeleProdutos(){
    return(
        <table className="tabele">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Imagem</th>
                    <th>Opções</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Nome </td>
                    <td>Sescllklkklks</td>
                    <td>imagem .jpg</td>
                    <td className="optionTabele">
                        <button><i className="bi bi-pencil"></i></button>
                        <button className="bi bi-trash"></button>
                    </td>
                </tr>
                <tr>
                    <td>Nome </td>
                    <td>Sescllklkklks</td>
                    <td>imagem .jpg</td>
                    <td className="optionTabele">
                        <button><i className="bi bi-pencil"></i></button>
                        <button className="bi bi-trash"></button>
                    </td>
                </tr>
                <tr>
                    <td>Nome </td>
                    <td>Sescllklkklks</td>
                    <td>imagem .jpg</td>
                    <td className="optionTabele">
                        <button><i className="bi bi-pencil"></i></button>
                        <button className="bi bi-trash"></button>
                    </td>
                </tr>
                <tr>
                    <td>Nome </td>
                    <td>Sescllklkklks</td>
                    <td>imagem .jpg</td>
                    <td className="optionTabele">
                        <button><i className="bi bi-pencil"></i></button>
                        <button className="bi bi-trash"></button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export default TabeleProdutos;