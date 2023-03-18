import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navBar'>
        <Link className='linkNavBar' to="/memotest"><span>Memorama</span> <span className='btnTry'>Try Now</span></Link>
        <Link className='linkNavBar' to="/wpm"><span>Words Per Minute</span> <span className='btnTry'>Try Now</span></Link>
        <Link className='linkNavBar' to="/pokemon"><span>Pokemon</span> <span className='btnTry'>Try Now</span></Link>
    </nav>
  )
}
