import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='h-screen w-full ' style={{ border: '2px solid black', background: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2' style={{ backgroundColor: 'white' }}>
          <button className='rounded-sm p-2 mx-2' style={{ background: 'red', color: 'white' }}
            onClick={() => {
              setColor('red')
            }}
          >
            Red
          </button>
          <button className='rounded-sm p-2 mx-2' style={{ background: 'blue', color: 'white' }}
            onClick={() => {
              setColor('blue')
            }}
          >
            Blue
          </button>
          <button className='rounded-sm p-2 mx-2' style={{ background: 'green', color: 'white' }}
            onClick={() => {
              setColor('green')
            }}
          >
            Green
          </button>
          <button className='rounded-sm p-2 mx-2' style={{ background: 'yellow', color: 'black' }}
            onClick={() => {
              setColor('yellow')
            }}
          >
          Yellow
          </button>
          <button className='rounded-sm p-2 mx-2' style={{ background: 'pink', color: 'black' }}
            onClick={() => {
              setColor('pink')
            }}
          >
          Pink
          </button>
        </div>
      </div>
    </>
  )
}

export default App
