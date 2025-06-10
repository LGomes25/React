import Alunos from "./components/Alunos";
import UserProvider from "./contexts/user";


export default function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola XPRO....</h1>
        <hr />
        <Alunos />
      </div>
    </UserProvider>
  )
}

