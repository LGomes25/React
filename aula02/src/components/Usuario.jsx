import Filho from "./Filho";

export default function Usuarios() {
    const usuarios =[
        
        {
            nome:"Antonio",
            email:"a@gmail.com"
        },
        {
            nome:"Leonardo",
            email:"l@gmail.com"
        },
        {
            nome:"Jaco",
            email:"j@gmail.com"
        }
];
    return (
        <div>
            <Filho users = {usuarios}/>
        </div>
    );
}
