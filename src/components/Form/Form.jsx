import React, {useContext, useState, createRef} from "react";
import {Input} from "../Input/Input"
import {FormContext} from '../../context/FormContext'
import "./Form.scss";




export const Form = () => {
    const mail = createRef()
    const password = createRef()
    const {validarFormulario} = useContext(FormContext)

    return (
        <>
            <div className="form-container">
                <form className="form bg-secondary border border-1 border-danger rounded-3 d-flex flex-column justify-content-center   ">
                    <h2 className="form__title">Registrate</h2>
                    <div className="mb-3 mt-5 w-100 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <Input ref={mail} type="text" placeholder="Email" id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3 w-100 text-center mt-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <Input ref={password} type="password" placeholder="Password" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn mx-auto d-block mt-4" onClick={(e)=>{
                        e.preventDefault()
                        validarFormulario(mail, password)
                        }}>

                        Submit
                    </button>
                </form>
            </div>

        </>
    );
};
