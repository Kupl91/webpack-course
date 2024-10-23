import React, { useState } from 'react'
import classes from './App.module.scss'
import { Outlet, Link } from 'react-router-dom';
import avatarPng from '@/assets/Avatar.png'
import avatarJpg from '@/assets/Avatar.jpg'
import Calendar from '@/assets/Calendar.svg'

const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)
  return (
    <div>
      <div>
        <img width={100} height={100} src={avatarPng} alt="" />
        <img width={100} height={100} src={avatarJpg} alt="" />
        
      </div>
      <div>
      <Calendar className={classes.icon} width={50} height={50} />
      </div>
      <Link to ={'/about'}>about</Link>
      <br/>
      <Link to ={'/shop'}>shop</Link>
        <h1 className={classes.value}>{count}</h1>
        <button className={classes.button} onClick={increment}>+1</button>
        <Outlet/>
    </div>
  )
}

export default App