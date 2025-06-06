
export default function Caixa(props) {
    const caixa = {
        width: "100px",
        heigth: "100px",
        backgroundColor: props.cor,
    };
    return (
        <div>
            <h2>Passando css por props</h2>
            <div style={caixa}>
                <p>Serratec - 2025</p>
            </div>
        </div>
    )
}
