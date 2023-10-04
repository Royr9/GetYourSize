

import "../css/LandingPage.css"
import { Link } from 'react-router-dom'


export default function LandingPage() {

  return (
    <div className='LandingPage'>

    <h2 className="animate slideInBottom animate--slow
    animate--delayhalf1s animate--fillBackwards">  Choose your Gender</h2>
    
    <Link to={"/men"}><button  
    className='man animate slideInLeft
     animate--delay1s animate--fillBackwards animate--slow '>
       Men</button></Link>
    <Link to={"/women"}><button
     className='woman animate slideInRight 
      animate--delay1s animate--fillBackwards animate--slow'> 
     Women</button> </Link>
     

    </div>
  )
}


