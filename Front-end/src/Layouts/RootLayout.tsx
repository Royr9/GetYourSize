
import { NavLink, Outlet } from 'react-router-dom'
import "../css/rootLayout.css"

export default function RootLayout() {
  const currentYear = new Date().getFullYear();


  return (
    <div className='root-layout'>
      <header>
        <nav> 
         <NavLink  to={"/"}><h3 className="logo">GetYourSize</h3  ></NavLink>
        </nav>
      </header>
    <main>
        <Outlet/>
    </main>
    
   
    </div>
  )
}
