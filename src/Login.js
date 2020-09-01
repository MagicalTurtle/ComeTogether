import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.scss';


export const Login = () => {
    return (
        <div className="App">
            <div className="container">
                <a href='http://localhost:3000/'>
                    <button className="button1" >
                        Login with Spotify
                    </button>
                </a>
            </div>
        </div>
    )
}