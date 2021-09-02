import React from 'react';
import './Alert.scss'

export const Alert = ({ color, message}) => {
    return (
        <div className="alertContainer row">
            <div className={`alert alert-${color} d-flex align-items-center" role="alert column`}>
                <div>
                    {message}
                </div>
            </div>
        </div>
    )
}