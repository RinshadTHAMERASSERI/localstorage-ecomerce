import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

function Nav({setSearch}) {
  return (
    <div className='nav'>
        <nav>
            <Link to={'/'}><div className='div'>Home</div></Link>
            
        
      <div className='div'>Details</div>
      <Link to={"/cart"}>
      <div className='div'>Cart</div>
      </Link>
      <div>
      <input className='' 
      type="Search"placeholder='Search fore,brand,product...'onChange={(e) => setSearch(e.target.value)}
         
        />
      </div>
        </nav>
      
    </div>
  )
}

export default Nav
