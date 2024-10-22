import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)
  return (
    <div>
        <h1>{count}</h1>
        <button className="button" onClick={increment}>+1</button>
    </div>
  )
}

export default App