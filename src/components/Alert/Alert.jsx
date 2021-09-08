import React from 'react';
import './Alert.scss'

export const Alert = ({ color, message, messageColor}) => {
    return (
        <div className="alertContainer row">
            <div className={`alert alert-${color} d-flex align-items-center" role="alert column`}>
                <p className={`${messageColor || 'text-dark'} m-0`}>
                    {message}
                </p>
            </div>
        </div>
    )
}