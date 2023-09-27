

import "../css/LandingPage.css"
import { Link } from 'react-router-dom'


export default function LandingPage() {

  return (
    <div className='LandingPage'>

      <h1 className="animate slideInTop animate--slow">
        Whats your size?</h1>
    <h2 className="animate slideInBottom animate--slow
    animate--delay1s animate--fillBackwards"> Please choose your Gender</h2>
    
    <Link to={"/men"}><button  
    className='man animate slideInLeft
     animate--delay1halfs animate--fillBackwards animate--slow '>
       Men</button></Link>
    <Link to={"/women"}><button
     className='woman animate slideInRight 
      animate--delay1halfs animate--fillBackwards animate--slow'> 
     Women</button> </Link>
     

    </div>
  )
}


