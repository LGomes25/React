import React, { useState } from 'react'

export default function Estado() {
    // let valor =100;
    const [valor, setValor] = useState(1);
    const [nome, setNome] = useState("Leonardo");
    const [cont, setContador] = useState(0);
    
    // function Increment(){
    //     setValor(valor *2);
    //     console.log(valor);
    // }

    return (
        <div>
            <h1>Exemplo uso do Status</h1>
            <p>Resultado:{valor}</p>
            <button onClick={()=>setValor(valor*2)}>Calcular</button>
            
            <h1>Exemplo uso do Status 2</h1>
            <p>Resultado:{nome}</p>
            <button onClick={()=>setNome("Antonio")}>Calcular</button>

            <h1>Exemplo uso do Status 3</h1>
            <p>Resultado:{cont}</p>
            <button onClick={()=>setContador(cont+1)}>Incrementar</button>
            <button onClick={()=>setContador(cont-1)}>Decrementar</button>
            <button onClick={()=>setContador(0)}>Reset</button>


        </div>
    )
}
