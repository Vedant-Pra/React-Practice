import { useState } from "react"

/*
function MyButton() {
  const [count, setCount] = useState(0)
  function handelClick() {
    setCount(count + 1)
  }

  return (
    <button
      onClick={handelClick}
    >
      Click {count} times
    </button>
  )

}

function App() {

  return (
    <>
      <MyButton />
      <MyButton />
    </>

  )
}

export default App

*/



export default function MyApp() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );


}

function MyButton({count,onClick}) {
  return (
    <button onClick={onClick}>Count: {count}</button>
  )
}