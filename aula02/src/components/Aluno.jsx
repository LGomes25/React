export default function Aluno({ nome, email, telefone, matriculado }) {
    return (
        <>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Telefone: {telefone}</p>
        <p>Aluno está matriculado? {matriculado ? "Sim" : "Não"}</p>
        </>
    );
}
