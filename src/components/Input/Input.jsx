import React from 'react'
import style from "./Input.module.css"

const Input = ({onClick, onChange, value,require, flag}) => {

  return (
    <>
   <h2 className={style.heading}> Rating</h2>

   <select className={style.input} onChange={onChange} 
   value={value.rating} name="rating" type="number"
    placeholder='Please share your experience with us' >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option> 
   </select>  
   
   <h3 className={style.heading}>Your Name</h3>
   
   <input className={style.input} name="name" 
   onChange={onChange} value={value.name} maxLength={15}
   type="text" placeholder='Please enter your name'/>

   {flag && <p className={style.required}>Name must be smaller than 2 or greater than 3</p>}
   <h3 className={style.heading}>Comment</h3> 
   
   <textarea className={style.textarea} name="textarea"
    onChange={onChange} value={value.textarea} 
    placeholder='Please write your feed back here'>
      </textarea>
      <br/>
   <p className={style.required}>{require}</p>
   
   <button  className={style.button} onClick={onClick}>
     Submit
   </button>
    </>
  )
}

export default Input
