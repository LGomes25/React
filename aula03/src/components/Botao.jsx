
export default function Botao(props) {
    return (
        <div>
            <button onClick={props.evento}>{props.text}</button>
        </div>
    )
}
