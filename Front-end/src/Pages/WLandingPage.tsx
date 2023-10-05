import React from 'react'
import { Link } from 'react-router-dom'
export default function WLandingPage() {
  return (
    <div className='WLandingPage'>
        <section className='title grid grid--2cols'>
            <div className='title-content flex flex--col flex--center '>
                <h1>Sizing made easy for your costumers!</h1>
                <h4>Save time and enhance productivity with the app that handle costumer sizing, for you!</h4>
              
            </div>
            <div className='title-img flex flex--v-center flex--col'>
                <h2 className='center-text'>App explanation</h2>
                <img src="" alt="" />
                <Link to={"/app"}><button>Try the app Now!</button></Link>
            </div>

        </section>
       
        </div>
  )
}
