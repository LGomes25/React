import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import "./App.css"

export default function App() {
  return (
    <div>
      <Header title="Cálculo de Média Final"/>
      <div className='corpo'>
        <Form />
      </div>

    </div>
  )
}
