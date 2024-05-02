import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor] = useState("gray")

  return (
    <>
      <div className='w-full min-h-screen text-white ' style={{background:color}}>
        <div className='bg-black h-min fixed bottom-4 w-full flex justify-center'>
          <button
            className='bg-white text-black rounded-md m-2 p-2'
            onClick={()=>{
              setColor('white')
            }}
          >
            White
          </button>
          <button
            className='rounded-md m-2 p-2'
            style={{background:'green'}}
            onClick={()=>{
              setColor('green')
            }}
          >
            Green
          </button>
          <button
            className='text-white rounded-md m-2 p-2'
            style={{background:'red'}}
            onClick={()=>{
              setColor('red')
            }}
          >
            Red
          </button>
          <button
            className=' text-white rounded-md m-2 p-2'
            style={{background:'blue'}}
            onClick={()=>{
              setColor('blue')
            }}
          >
            Blue
          </button>
          <button
            className= 'text-white rounded-md m-2 p-2'
            style={{background:'purple'}}
            onClick={()=>{
              setColor('purple')
            }}
          >
            Purple
          </button>
          <button
            className='text-black rounded-md m-2 p-2'
            style={{background:'yellow'}}
            onClick={()=>{
              setColor('yellow')
            }}
          >
            Yellow
          </button>
          <button
            className='text-white rounded-md m-2 p-2'
            style={{background:'brown'}}
            onClick={()=>{
              setColor('brown')
            }}
          >
            Brown
          </button>
          {/* <p>Hello</p> */}
        </div>
      </div>
    </>
  )
}

export default App
