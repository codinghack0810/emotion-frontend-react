import React from "react";
// import setAuthToken from './utils/setAuthToken'
import './loading.css'
const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div id="page">
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3">Generando</div>
        </div>
</div>
        </div>
    )
}

export default Loading;