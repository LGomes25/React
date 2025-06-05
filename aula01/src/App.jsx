import Exemplo from "./components/Exemplo";

export default function App(){
  const nome = "Maria";
  const maiusculo = nome.toUpperCase();

  function calculo(a,b){
    return a+b;
  }

    return(
      <>
        <h1>Hello World</h1>
        <h2>Aula de React</h2>
        <h3>{maiusculo}</h3>
        <h3>Soma: {calculo(5,6)}</h3>
        <Exemplo/>
      </>
    );
}


// const App = () => {
//   return <h1>Hello World</h1>
// }
// export default App;