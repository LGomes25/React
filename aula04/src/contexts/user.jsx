import { createContext, useState } from "react";


export const UserContext = createContext({});

export default function UserProvider({children}){

    const [nomeAluno, setNomeAluno] = useState("Carla")
    const[total, setTotal] = useState(1000)

    return(
        <UserContext.Provider value={{nomeAluno, setNomeAluno, total}}>
            {children}
        </UserContext.Provider>   
    )
}