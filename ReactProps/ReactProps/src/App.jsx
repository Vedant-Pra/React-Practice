import React from 'react'
import { Card } from './components/Card'
let myObj = {
  name: 'Vedant',
  age: 22,
  gender: 'Male'
}
export default function App() {
  return (
    <>
      <Card channel="helloWorld" btnText="Java Here" />
      <Card channel="React" />
      {/* <Card /> */}
    </>
  )
}
