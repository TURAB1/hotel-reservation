import React from 'react'
import {Link} from "react-router-dom"
import { List } from 'phosphor-react'
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
    <div className='links'>
     <Link to="/">Accomodation</Link>
     <Link to="/restaurantAndBar">Restaurant&Bar</Link>
     <Link to="/checkReservation">Check Reservation</Link>
     <Link to="/menu">
        <List size={32}/>
     </Link>
      

    </div>
    
    
    </div>
  )
}
