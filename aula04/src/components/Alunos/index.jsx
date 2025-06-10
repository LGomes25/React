import { useContext } from "react";
import Nome from "../Nome";
import { UserContext } from "../../contexts/user";


export default function Alunos() {
    const{nomeAluno} = useContext(UserContext)
    return (
        <div>
            <h1>Componente Alunos: {nomeAluno}</h1>
            <Nome />    
        </div>
    )
}
