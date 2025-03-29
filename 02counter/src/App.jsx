import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter , setCounter]=useState(0)

  
  
  const AddValue=()=>{
      counter= counter +1;
      setCounter(counter)
  }

  const RemoveValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1> cahi aur react</h1>
      <h1>Counter value:{counter}</h1>

      <button onClick={AddValue} >Add Value {counter}</button>
      <button onClick={RemoveValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
