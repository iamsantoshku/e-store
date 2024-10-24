import React from 'react'
import backimg from '../assest/banner/banner9.avif'
import { NavLink } from 'react-router-dom'

const Background = () => {
  return (
    <div>
        <NavLink ><img src={backimg} alt="" />   </NavLink>  
    </div>
  )
}

export default Background
