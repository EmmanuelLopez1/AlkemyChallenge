import React from 'react'
import './Input.scss'

export const Input = ({type, placeholder, id})=>{
    return(
        <input type={type} className="input form-control mt-2"  id={id}  placeholder={placeholder}/>
    )
}