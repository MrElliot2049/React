import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0);

  function addVal()
  {
    console.log('clicked');
    if (counter < 20)
    {
      setcounter(counter + 1);
    }
  }
  function removeVal()
  {
    console.log("clicked");
    if (counter > 0)
    {
      setcounter(counter - 1);
    }
  }
  return (
    <>
     <h1>Counter</h1>
     <h2>Value : {counter}</h2>
     <button onClick={addVal}>Add Value</button>
     <br /> 
     <button onClick={removeVal}>Remove values</button>
    </>
  )
}

export default App
