
import "../css/LandingPage.css"

import { GendersType } from "../types/AppTypes"

type LandingPagePropsType ={
  onGenderSelect: (props: GendersType)=> void;
}

export default function LandingPage({onGenderSelect}: LandingPagePropsType) {

 const  handleButtonClick = (gender:GendersType)=>{
    onGenderSelect(gender);
  }


  return (
    <div className='LandingPage'>
    <h2 className="animate slideInBottom animate--slow
    animate--delayhalf1s animate--fillBackwards">  Choose your Gender</h2>
  <button  onClick={()=> handleButtonClick("men")}
    className='man animate slideInLeft
     animate--delay1s animate--fillBackwards animate--slow '>
       Men</button>
    <button onClick={()=> handleButtonClick("women")}
     className='woman animate slideInRight 
      animate--delay1s animate--fillBackwards animate--slow'> 
     Women</button> 
     
    </div>
  )
}


