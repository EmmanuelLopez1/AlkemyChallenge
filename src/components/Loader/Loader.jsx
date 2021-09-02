import React from "react";
import './Loader.scss'

export const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loader__text fs-1">
          CyberLoading
        </div>
      </div>
    </>
  );
};
