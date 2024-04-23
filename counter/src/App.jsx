import { useState } from 'react'

import './App.css'

function App() {
  const [Counter, setCount] = useState(15)
  
const AddValue=()=>{
  setCount((prevCounter)=> prevCounter+1)
  setCount((prevCounter)=> prevCounter+1)
  setCount((prevCounter)=> prevCounter+1)
  setCount((prevCounter)=> prevCounter+1)
}
const RemoveValue=()=>{
  setCount((prevCounter)=>prevCounter-1)
  setCount((prevCounter)=>prevCounter-1)
  setCount((prevCounter)=>prevCounter-1)
  setCount((prevCounter)=>prevCounter-1)
}
  return (
    <>
      <h1>Hello , this is Priti!</h1>
      <h2>Counter value: {Counter}</h2>
      <button onClick={AddValue}>Add Value</button>{" "}
      <button onClick={RemoveValue}>Remove Value</button>
      <p>footer: {Counter}</p>
    </>
  )
}

export default App
