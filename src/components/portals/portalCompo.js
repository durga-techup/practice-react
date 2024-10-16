import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import ToastComp from "../toast/toastComp.js"
export const PortalComponent = () => {
    return ReactDOM.createPortal(
        <ToastComp />
        ,
        document.getElementById('portal') // Target container outside the root element
    );
};