import React from 'react';
import NotFoundImage from '@assets/signo-cerrado.png';
import '@styles/NotFound.scss';


const NotFound = () => {
    return (
    <div className  = "login-container">
        <div className = "NotFound-container">
            <img src={NotFoundImage} alt="logo" className="NotFoundImage" />
            <h1 className="title"> Oppsy!  Error 404: Not Found </h1>
            <p className="subtitle"> it seems we couldn't find the page you were looking for </p>
            <button type="button" className="btn btn-primary">  Go back </button>
        </div>
    </div>
);
}

export default NotFound;