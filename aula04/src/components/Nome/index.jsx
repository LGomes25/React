import { useContext, useState } from "react"
import { UserContext } from "../../contexts/user"


export default function Nome() {
    const [novoNome, SetNovoNome] = useState("")
    const{nomeAluno, setNomeAluno, total} = useContext(UserContext)
    

    return (
        <div>
            <p>Total Geral: {total}</p>
            <h2>Nome do Aluno:{nomeAluno}</h2>
            <input 
                type="text" 
                value={novoNome}
                placeholder="Insira o nome"
                onChange={(e)=>{SetNovoNome(e.target.value)}} 
                />

            <button onClick={()=>{setNomeAluno(novoNome)}}>Alterar Nome</button>
        </div>
    )
}
