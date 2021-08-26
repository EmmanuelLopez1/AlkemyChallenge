import React, {useState, createContext} from 'react';
export const FormContext = createContext()


export const FormProvider = ({children})=>{

    const validarFormulario = (email, password, mailWarning, passwordWarning)=>{
        const emailValue = email.current.value
        const passwordValue = password.current.value

        email = email.current
        password = password.current

        mailWarning = mailWarning.current
        passwordWarning = passwordWarning.current

        if(emailValue === ""){
            console.log('vacio');
            mostrarErrorDeValidacion(email, mailWarning)
        }else{
            formOk(email, mailWarning)
        }

        if(passwordValue === ""){
            mostrarErrorDeValidacion(password, passwordWarning)
        }else{
            formOk(password, passwordWarning)
        }
    }

    const mostrarErrorDeValidacion = (input, elementWarning)=>{
        input.style.border = '2px solid red';
        elementWarning.style.display = 'block'
    }

    const formOk = (input, elementWarning)=>{
        input.style.border = '0px'
        elementWarning.style.display = 'none'
    }

    return(
        <FormContext.Provider value={{validarFormulario}}>
            {children}
        </FormContext.Provider>
    )
}