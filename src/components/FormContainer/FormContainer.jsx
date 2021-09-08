import React, { useContext, useEffect } from "react";
import { Form } from "../Form/Form";
import { FormContext } from "../../context/FormContext";
import { Alert } from "../Alert/Alert"
import { Loader } from "../Loader/Loader";
import { Home } from "../Home/Home"

export const FormContainer = () => {
    const { loader, alert, error, token } = useContext(FormContext);
    const messageError = `Error ${error} al cargar la pagina.`

    useEffect(() => {
        console.log(token);
    })

    return (
    <>
        {alert ? <Alert message={messageError}/> : loader ? <Loader/> : token ? <Home/> : <Form />}
    </>
    )
};
