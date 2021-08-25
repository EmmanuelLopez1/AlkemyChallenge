import React, {useState, createContext} from 'react';
export const FormContext = createContext()


export const FormProvider = ({children})=>{

    const validarFormulario = (email, password)=>{
        const emailValue = email.current.value
        const passwordValue = password.current.value

        if(emailValue === "" || passwordValue === ""){
            console.log('campos vacios');
        }
    }

    return(
        <FormContext.Provider value={{validarFormulario}}>
            {children}
        </FormContext.Provider>
    )
}