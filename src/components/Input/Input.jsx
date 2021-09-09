import React,{forwardRef} from 'react'
import './Input.scss'

export const Input = forwardRef(
    ({type, placeholder, id, name}, ref) =>{
    return(
        <input type={type} className="input form-control mt-2"  id={id}  placeholder={placeholder} ref={ref} name={name}/>
    )
}) 