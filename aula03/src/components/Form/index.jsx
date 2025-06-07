import { useState } from "react";
import "./style.css";
export default function Form() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        let calc = (peso / altura ** 2);
        
        setImc(calc);

        if (calc < 18.5) {
            setClassificacao("Abaixo do peso");
        }else if (calc < 25.0){
            setClassificacao("Peso Normal")
        }else if (calc < 30){
            setClassificacao("Sobrepeso")
        }else{
            setClassificacao("Obesidade")
        }
    }

    return (
        <div>
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="peso">Peso:</label>
            <input 
                type="number" 
                name="peso" 
                id="peso" 
                required 
                value={peso} 
                onChange={(e)=>{
                    setPeso(e.target.value);
                    }}
                />

            <label htmlFor="altura">Altura:</label>
                <input
                type="number"
                name="altura"
                id="altura"
                required
                value={altura}
                onChange={(e) => {
                    setAltura(e.target.value);
                }}
                />

            {peso && altura ? <label>Resultado: {imc.toFixed(2)} - {classificacao}</label> : ""}
            <button className="botao">Calcular</button>

        </form>
        </div>
    );
}
