import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.scss';
var Spotify = require('./spotify-web-api.js');

function dec2hex(dec) {
    return dec < 10 ?
        '0' + String(dec) :
        dec.toString(16)
}

// generateId :: Integer -> String
function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
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

export const Login = () => {
    
    function loginClicked() {
        var sp = new Spotify();

        let clientID = 'c0165aba62184390b6b994b03fb8f467'
        let responseType = ''
        let rediredtURI = ''
        let state = generateId() // to prevent cross site attacks
        window.sessionStorage.setItem('loginState', state)
        let scope = ''

        let authUrl = `https://accounts.spotify.com/authorize?sent=yes&`
        window.location.href = "http://localhost:3000/";
    }

    if (getUrlParameter('accessToken')) {
        return alert(getUrlParameter('accessToken'))
    } else if (getUrlParameter('error')) {
        return alert(getUrlParameter('error'))
    } else { // first time visiting the login
        return (
            <div className="App">
                <div className="container">
                    <button className="button1" id="loginButton" onClick={loginClicked}>
                        Login with Spotify
                    </button>
                </div>
            </div>
        )
    }
}