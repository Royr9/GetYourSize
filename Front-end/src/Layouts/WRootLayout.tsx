import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


export const year = new Date().getFullYear();

export default function WRootLayout() {

  return (
    <div className='WRootLayout'>
        <header>
            <nav>
            <Link className='logo' to={"/"}> GetYourSize </Link>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Try out</NavLink>
            <NavLink to={"/"}>Product</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
            </nav>
        </header>

       <main>
        <Outlet/>
       </main>

       <footer>
        <p>@ all rights reserved {year}</p>
       </footer>
        
     </div>
  )
}
