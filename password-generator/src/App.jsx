import { useCallback, useState, useEffect, useRef, use } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [canNumber, setNumber] = useState(false)
  const [canAlpha, setAlpha] = useState(false)
  const [length, setLength] = useState(8)

  const passwordRef = useRef(null)
 const passwordGenerator = useCallback(() =>
 {
  let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
  let pass = ""
  if(canNumber)
  {
    str+="1234567890"
  }
  if(canAlpha)
  {
    str+="-/':.><)(*&^%$#@!~"
  }
  for (var i = 0; i < length; i++)
  {
    let idx = Math.floor(Math.random() * str.length);
    pass += str.charAt(idx)
  }
  setPassword(pass)
 }
  ,[length,canAlpha,canNumber])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(()=> {passwordGenerator()}, [passwordGenerator]);
  return (
    <>
      <div className="w-[90%] max-w-3xl bg-[#111827] mx-auto mt-10 p-8 rounded-2xl shadow-xl">
  {/* Title */}
  <h1 className="text-white text-3xl text-center font-semibold mb-6">
    Password Generator
  </h1>

  {/* Input + Copy Button */}
  <div className="flex bg-white rounded-xl shadow-md overflow-hidden mb-6">
    <input
      type="text"
      value={password}
      className="outline-none w-full text-lg py-3 px-4 placeholder-gray-500"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />

    <button
      className="
        bg-blue-600 
        text-white 
        px-5 
        py-2 
        font-medium
        shrink-0
        rounded-none
        hover:bg-blue-700 
        active:bg-blue-800 
        transition-all 
        duration-200
      "
      onClick={copyToClipboard}
    >
      Copy
    </button>
  </div>

  {/* Length Slider */}
  <div className="flex items-center justify-between mb-4">
    <label className="text-orange-400 text-sm font-medium">
      Length: {length}
    </label>

    <input
      type="range"
      max={100}
      min={6}
      value={length}
      className="cursor-pointer w-2/3 accent-orange-500"
      onChange={(e) => {
        setLength(e.target.value);
      }}
    />
  </div>

  {/* Options */}
  <div className="space-y-2 mt-2">
    <div className="flex items-center gap-x-2">
      <input
        type="checkbox"
        defaultChecked={canNumber}
        id="numberInput"
        onChange={() => {
          setNumber((prev) => !prev);
        }}
        className="accent-orange-500"
      />
      <label
        htmlFor="numberInput"
        className="text-orange-400 text-sm font-medium"
      >
        Include Numbers
      </label>
    </div>

    <div className="flex items-center gap-x-2">
      <input
        type="checkbox"
        defaultChecked={canAlpha}
        id="charInput"
        onChange={() => {
          setAlpha((prev) => !prev);
        }}
        className="accent-orange-500"
      />
      <label
        htmlFor="charInput"
        className="text-orange-400 text-sm font-medium"
      >
        Include Characters
      </label>
    </div>
  </div>
</div>

    </>
  )
}

export default App
