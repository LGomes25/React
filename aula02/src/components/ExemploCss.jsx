import Button from "./Button";
import Caixa from "./Caixa";
import Eventos from "./Eventos";
import "./ExemploCss.css";

export default function ExemploCss() {
    const texto = {
        color: "green",
        fontSize: "2em",
    };

    return (
        <div>
            <h1 style={{ color: "#f019", fontSize: "4em" }}>Aula de React - CSS</h1>
            <h2 style={texto}>Css incorporado</h2>
            <h3 className="frase">Css no arquivo</h3>   
            <Caixa cor="orange" />  
            <Button/>
            <button className="botao">Clique Aqui2</button>
            <Eventos/>
        </div>
    );
}
