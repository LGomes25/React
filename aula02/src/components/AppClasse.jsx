import React, { Component } from 'react'

export default class AppClasse extends Component {
    
    constructor(props){
        console.log("Construtor");
        super(props);
        this.state = {
            dia: "terça-feira",
        }
    }
    
    
    componentDidMount(){
        console.log("Usando o DidMount");
        this.setState({dia: "Sexta-feira"});
    }

    componentDidUpdate(){
        console.log("Removendo da DOM");
    }

    render() {
        return (
        <div>
            <h1>Componente de Classe</h1>
            <h2>{this.state.dia}</h2>
        </div>
        )
    }
}
