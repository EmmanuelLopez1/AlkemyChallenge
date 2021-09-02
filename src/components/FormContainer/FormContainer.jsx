import React, { useContext } from "react";
import { Form } from "../Form/Form";
import { FormContext } from "../../context/FormContext";
import {Alert} from "../Alert/Alert"
import { Loader } from "../Loader/Loader";

export const FormContainer = () => {
    const { loader, alert, error } = useContext(FormContext);
    const messageError = `Error al cargar la pagina error: ${error}`

    return (
    <>
        {alert ? <Alert color='danger' message={messageError}/> : loader ? <Loader/> : <Form />}
    </>
    )
};
