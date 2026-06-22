import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
let [counter,setCounter] = useState(0)//here inside let we can use any name
//here useState is a hooks and there is many hooks
//let counter=5;

const addValue=()=>{
  
  //counter = counter + 1;
  if(counter<=19){
   setCounter(counter + 1)
  }
}  
const removeValue=()=>{
  if(counter>=1){
    setCounter(counter-1)
  }
}

return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
