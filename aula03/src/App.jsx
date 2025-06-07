import React from 'react'
import Header from './components/Header/Index'
import Form from './components/Form'
import "./App.css";

export default function App() {
  return (
    <div>
      <Header title="Calculo do IMC" />
      <div className='corpo'>
        <Form/>
      </div>
      
    </div>
  )
}
