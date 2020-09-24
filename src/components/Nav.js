import React, { Component } from 'react'
import { loginClicked } from '../Login.js'

export default class Nav extends Component {
    changePage = async (page) => {
        document.location.href = `/${page}`;
    }

    render() {
        return (
            <div id="NavBar" className="NavStyle animate__animated animate__slideInDown">
                <button id="NavMain" onClick={() => this.changePage("home")} className="NavText">Main</button>
                <button id="NavComp" onClick={() => this.changePage("compare")} className="NavText">Compare</button>
                <button className="loginButton" id="loginButton" onClick={loginClicked}>Login with Spotify</button>
            </div>
        )
    }

}
