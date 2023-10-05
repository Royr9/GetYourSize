
import { Outlet } from "react-router-dom"
import "../css/AppLayout.css"
import { year } from "./WRootLayout"


export default function GetYourSizeRoot() {
  return (
    <div className='get-your-size-app footer-bottom'>
        <h2 className="brand">GetYourSize</h2>

    <main>
      <Outlet/>
    </main>

        <footer>
        <p>© All rights reserved Aguamar {year}</p>
       </footer>
    </div>
  )
}
