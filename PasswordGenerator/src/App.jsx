import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [number, setNumber] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [password, setPassword] = useState("")
  const [count, setCount] = useState(8)
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let str = "qwertyuiopasdfghjklzxcvbnm"
    let numbers = "1234567890"
    let chars = "!@#$%^&*()"
    if (number)
      str += numbers
    if (specialChar)
      str += chars
    let len = str.length
    let password = ""
    for (let i = 0; i < count; i++) {
      let rand = Math.floor(Math.random() * len)
      password += str[rand]
    }
    setPassword(password)
  }, [number, specialChar, count, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [number,specialChar,count, passwordGenerator])

  const copyPasswordToClip = ()=>{
    passwordRef.current?.select()
    console.log(passwordRef.current.value)
    window.navigator.clipboard.writeText(passwordRef.current?.value)
  }




  return (
    <div className='w-full min-h-screen bg-black flex justify-center'>
      <div className="bg-gray-700  text-orange-500  h-40 p-4 my-auto overflow-hidden rounded-lg">
        <div className='flex items-center gap-x-4'>
          <input type="text"
            value={password}
            placeholder='Password'
            readOnly
            className='rounded-lg p-2'
            ref = {passwordRef}
          />
          <button
            className='bg-blue-700 text-white p-2 rounded-lg'
            onClick={copyPasswordToClip}
            >
            Copy
          </button>
        </div>
        <div className='mt-2 flex items-center gap-x-4'>
          <input type="range"
          min={8}
          max={50}
          value={count}
          className='cursor-pointer'
          onChange={(e)=>{setCount(e.target.value)}}
          />
          <label >Length: {count}</label>
        </div>
        <div className='flex items-center gap-x-1 mt-2'>
          <input type="checkbox"
          name="Number"
          defaultChecked={number}
          onClick={()=>{
            setNumber(!number)
            console.log(number)
          }}
           />
           <label>Numbers</label>
           <input type="checkbox"
           className='ml-4'
           defaultChecked={specialChar}
           onClick={()=>{
            setSpecialChar(!specialChar)
           }}
           />
           <label>Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App;
