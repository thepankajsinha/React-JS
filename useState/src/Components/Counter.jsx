import React from 'react'
import { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    //Here, count is a variable, setCount is a function to update the count and useState(0) provide the default value for the count variable
    const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked {count} times</p>
      <button id='btn' onClick={()=> {setCount(count+ 1)}}>Click me</button>
    </div>
  )
}

export default Counter