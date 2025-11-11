import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [canNumber, setNumber] = useState(false)
  const [canAlpha, setAlpha] = useState(false)
  const [length, setLength] = useState(8)

 const passwordGenerator = useCallback(() =>
 {
  str = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
  pass = ""
  if(canNumber)
  {
    str+="1234567890"
  }
  if(canAlpha)
  {
    str+="-/':.><)(*&^%$#@!~"
  }
  for (var i = 0; i < str.length; i++)
  {
    var idx = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(idx)
  }
  setPassword(pass)
 }
  ,[setNumber,setLength,setAlpha,setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-4 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input value={password} type='text' placeholder='password'
        className='outline-none w-full py-1 px-3'></input>
      </div>
    </div>
    </>
  )
}

export default App
