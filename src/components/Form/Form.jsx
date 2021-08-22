import React from "react";
import "./Form.scss";
import {Input} from "../Input/Input"
export const Form = () => {
    return (
        <>
            <div className="form-container">
                <form className="form bg-secondary border border-1 border-danger rounded-3 d-flex flex-column justify-content-center   ">
                    <h2 className="form__title">Registrate</h2>
                    <div className="mb-3 mt-5 w-100 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <Input type="text" placeholder="Email" id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3 w-100 text-center mt-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <Input type="password" placeholder="Password" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn mx-auto d-block mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
