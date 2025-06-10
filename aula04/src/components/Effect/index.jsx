import React, { useEffect, useState } from 'react'

export default function Effect() {
    const[contador, setContador] = useState(0)
    const[nome, setNome] = useState("João")
    const[texto, setTexto] = useState("exemplo")
    const[hora, setHora] = useState(new Date())
    const[user, setUser] = useState({})

    // useEffect(()=>{
    //     if (contador ===3){
    //     alert("Teste de useEffect")
    //     }
    // },[contador])
    
    useEffect(()=>{
        
        fetch("https://api.github.com/users/LGomes25")
        .then((resposta) => resposta.json())
        .then((json) => setUser(json));

    },[])

    useEffect(()=>{
        
        setInterval(()=>{
            setTexto("Exemplo useEffect")
        }, 3000)

    },[texto])
    
    useEffect(()=>{
        
        setInterval(()=>{
            setHora(new Date())
        }, 1000)

    },[hora])

    return (
        <div>
            <p>Login:{user.login}</p>
            <p>Login:{user.name}</p>
            <p>Login:{user.bio}</p>
            <img src={user.avatar_url} alt="imagem" />
            <p>Hora: {hora.toLocaleTimeString()}</p>
            <p>{texto}</p>
            <p>Contador:{contador}</p>
            <p>Nome:{nome}</p>
            <button onClick={() => setContador(contador+1)}>Incrementar</button>
            <button onClick={(prevNome) => setNome(prevNome === "Antônio"? "João" : "Antônio")}>Alterar Nome</button>

        </div>
    )
}
