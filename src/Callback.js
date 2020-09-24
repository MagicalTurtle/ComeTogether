import React from 'react'
import './App.scss';

var Spotify = require('./spotify-web-api.js');
var sp = new Spotify();

function getUrlParameter(sParam) {
    var sPageURL = window.location.hash.substr(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

export const Callback = () => {
    // check for cross site scripting issues
    if (!getUrlParameter('state') || !window.sessionStorage.getItem('loginState') || getUrlParameter('state') !== window.sessionStorage.getItem('loginState')) {
        return (
        < div className = "App">
            <h2>Error 8008135:</h2>
            <p>Error while logging in to Spotify, please try again</p>
        </div>
        )
    }

    // if we are clear then check the token
    if (getUrlParameter('access_token')) {
        sp.setAccessToken(getUrlParameter('access_token'))
        sp.getMe()
            .then(function() {
                window.sessionStorage.setItem('accessToken', getUrlParameter('access_token'))
                window.location.href = 'http://localhost:3000/';
        },
        function (err) {
            console.error(err);
            window.location.href = 'http://localhost:3000/error?' + err;
        });

        return (<div className="App"></div>) // umm this isnt clean but this is just our color bg placeholder
    }
    
    // if spotify returns us an error
    else if (getUrlParameter('error')) { // idk why this would happen ill figure it out later, TODO: tbh all these error things should be managed by a function
        window.location.href = 'localhost:3000/error?' + getUrlParameter('error');
        return
    } else { // woah bro you shouldnt be here if not redirected from spotify oauth
        return (
            <div className="App">
                <div className="container">
                    <text>bruh error 4311: i cant even tell you how this happend</text>
                </div>
            </div>
        )
    }
}