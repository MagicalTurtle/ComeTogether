import React from 'react'
import './App.scss';

function dec2hex(dec) {
    return dec < 10 ?
        '0' + String(dec) :
        dec.toString(16)
}

function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

export const Login = () => {
    
    function loginClicked() {
        let clientID = 'c0165aba62184390b6b994b03fb8f467'
        let redirectURI = "http://localhost:3000/callback"
        let state = generateId(8) // to prevent cross site attacks
        window.sessionStorage.setItem('loginState', state)
        let scope = 'user-follow-read user-top-read'

        let authUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&state=${state}&scope=${scope}`
        window.location.href = authUrl;
    }

    return (
        <div className="App">
            <div className="container">
                <button className="button1" id="loginButton" onClick={loginClicked}>
                    Login with Spoooooooooooootify
                </button>
            </div>
        </div>
    )
    
}