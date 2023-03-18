import React from 'react'
import { Link } from 'react-router-dom'

export const ReturnBar = () => {
  return (
    <nav>
        <Link className='returnLink' to="/">⏪ Return</Link>
    </nav>
  )
}
