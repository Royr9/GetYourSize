import React from 'react'
import { Form } from 'react-router-dom'
import { GendersType } from "../types/AppTypes"
import "../css/userForm.css"



type UserFormType = {
  gender: GendersType
  inputs: string[] ,
  id: GendersType,
  resultReceived?: boolean | "pending";
}

export default function UserForm(props: UserFormType) {

  return (
    <div>
      
      <Form className='userForm' method='post' action={`/${props.id}`}>
      <h2 className='form-header'>Please insert your measurements</h2>
      
<div className='inputs'>
  {
    props.inputs?.map( (input, index) =>{
      return (
        <div className='size-input' key={index}>
          <label htmlFor="">{input}</label>
          <input required min={40} max={210} name={input} type="number" />
        </div>
      )
    })
  }
  </div>
  <div className='grid-div'>
  <img  src={`/media/${props.gender}SizesImage.png`} alt="" />
  </div>

  
  <div className='submit-button'>
  <button type='submit'>Get Your Size</button>
  </div>
   
    
      </Form>
    </div>
  )
}
