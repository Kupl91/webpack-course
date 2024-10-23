import React, { useState } from 'react'
import classes from './App.module.scss'

const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)
  return (
    <div>
        <h1 className={classes.value}>{count}</h1>
        <button className={classes.button} onClick={increment}>+1</button>
    </div>
  )
}

export default App