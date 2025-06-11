import React from 'react'
import { useParams } from 'react-router-dom'

export default function Produto() {
    const{id} = useParams();

    return (
        <div>
            <h1>Detalhes do Produto: {id}</h1>
        </div>
    )
}
