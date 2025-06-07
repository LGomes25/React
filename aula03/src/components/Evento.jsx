import Botao from "./Botao";
import Entrada from "./Entrada";

export default function Evento() {
    function testeEvento(){
        console.log("Teste Evento");
    }

    function segundoEvento(){
        console.log("Segundo Evento");
        
    }

    return (
        <div>
            <Botao evento ={testeEvento} text="Botão1"/>
            <Botao evento ={segundoEvento} text="Botão2"/>
            <Entrada/>
        </div>
    )
}
