import React from "react";
import "./Form.scss";

export const Form = () => {
    return (
        <>
            <div className="form-container">
                <form className="form bg-secondary border border-2 border-primary rounded-3">
                    <h2 className="form__title">Registrate</h2>
                    <div className="mb-3 mt-5 w-100 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="input form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email@example.com"
                        />
                    </div>
                    <div className="mb-3 w-100 text-center">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="input form-control"
                            id="exampleInputPassword1"
                            placeholder="Example name"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto d-block mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
