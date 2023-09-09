import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'
import Users from './Users'

function App() {

  return (
    <>      
      <h2>React Core Concepts Recap</h2>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Users></Users>
      <Posts></Posts>
    </>
  )
}

export default App
