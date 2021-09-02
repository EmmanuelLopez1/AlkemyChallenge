import React, { useState, createContext } from "react";
import { styles } from "../estilos/styles";
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [loader, setLoader] = useState(false)
  const [alert, setAlert] = useState(false)
  const [error, setError] = useState()

  const validarFormulario = (email, password, mailWarning, passwordWarning) => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    email = email.current;
    password = password.current;

    mailWarning = mailWarning.current;
    passwordWarning = passwordWarning.current;

    
    validarCampo(emailValue, "", ()=>{
      mostrarErrorDeValidacion(email, mailWarning)
    }, 
    ()=>{
      ocultarErrorDeValidacion(email, mailWarning)
    })

    validarCampo(passwordValue, "", 
    ()=>{
      mostrarErrorDeValidacion(password, passwordWarning)
    }, 
    ()=>{
      ocultarErrorDeValidacion(password, passwordWarning)
    });

    peticion()
  };

  const validarCampo = (campo, value, codigo, codigo2) => {
    if(campo === value){  
      codigo()
      return true;
    }else{
      codigo2()
      return false; 
    }
  }

  const mostrarErrorDeValidacion = (input, elementWarning) => {
    input.style.border = `2px solid ${styles.warning}`;
    elementWarning.style.display = "block";
  };

  const ocultarErrorDeValidacion = (input, elementWarning) => {
    input.style.border = "0px";
    elementWarning.style.display = "none";
  };

  const peticion = () => {
    const axios = require("axios");
    const url = "http://challenge-react.alkemy.org/";

    setLoader(true)
      //OBJECT PETITION
      axios({
        method: "post",
        url: url,
        data:  {
          email: "challenge@alkemy.org",
          password: "react",
        },
      })
        .then((res) => {
          console.log(res);
          console.log(typeof res.config.data);
          console.log(res.config.data);
          setLoader(false)
        })
        .catch((error) => {
          setAlert(true)
          console.log(error);
        });

    //JSON PETITION
    // axios({
    //   method: "post",
    //   url: url,
    //   data: JSON.stringify({
    //     email: "challenge@alkemy.org",
    //     password: "react",
    //   }),
    // })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(typeof res.config.data);
    //     console.log(res.config.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //     console.log(typeof error.response.config.data);
    //     console.log(error.response.config.data);
    //   });
  };

  return (
    <FormContext.Provider value={{ validarFormulario, loader, alert }}>
      {children}
    </FormContext.Provider>
  );
};
