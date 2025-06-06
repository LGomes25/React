import Aluno from "./components/aluno";
import { Componente1, Componente2 } from "./components/Componente1";
import Curso from "./components/curso";
import Usuario from "./components/Usuario";


export default function App(){

  return(

    <>
    
      <h1>Teste</h1>
      <Componente1/>
      <Componente2/>
      <Curso nome="React"/>
      <Aluno nome="Antonio" email="antonio@gmail.com" telefone="22340909" matriculado={true} />
      <Usuario/>
    </>


  )


}