import { useState } from "react";
import "./style.css"
export default function Form() {
    
    const[media, setMedia]=useState(0);
    const[situacao, setSituacao]=useState("");
    const[n1, setN1]=useState("");
    const[n2, setN2]=useState("");
    const[n3, setN3]=useState("");
    const[n4, setN4]=useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        let calc = ((n1+n2+n3+n4)/4);
        setMedia(calc);
        if (calc < 5){
            setSituacao("Reprovado")
        }else if (calc <7){
            setSituacao("Recuperação")
        }else{
            setSituacao("Aprovado")
        }

    }
    
    
    return (
        <div>
            <form className='formulario' onSubmit={handleSubmit}>
                <label htmlFor="nota1">Nota 1: </label>
                <input 
                    type="number"
                    name="n1"
                    id="n1"
                    required
                    value={n1}
                    onChange={(e)=>{
                        setN1(Number(e.target.value))
                    }}
                    />
                
                <label htmlFor="nota2">Nota 2: </label>
                <input 
                    type="number" 
                    name="n2"
                    required
                    value={n2}
                    onChange={(e)=>{
                        setN2(Number(e.target.value))
                    }}
                    />
                
                <label htmlFor="nota3">Nota 3: </label>
                <input 
                    type="number" 
                    name="n3"
                    id="n3"
                    required
                    value={n3}
                    onChange={(e)=>{
                        setN3(Number(e.target.value))
                    }}
                    />
                
                <label htmlFor="nota4">Nota 4: </label>
                <input 
                    type="number" 
                    name="n4"
                    id="n4"
                    required
                    value={n4}
                    onChange={(e)=>{
                        setN4(Number(e.target.value))
                    }}
                    />

                {n1&&n2&&n3&&n4 
                    ? <label className="resultado">Média Final: {media.toFixed(2)} - Situação: {situacao}</label> 
                    : ""
                    }
                <button className="botao" type="submit">Calcular</button>
            </form>
        </div>
    )
}
