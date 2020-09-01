import React from 'react';
import Container from 'react-bootstrap/esm/Container'
import './App.scss';

import Nav from "./components/Nav";
import Main from "./components/Main";
export const Home = () => {
    return (
        <div>
            <div className="App">
                <Nav/>
                <Main/>
            </div>
        </div>
    )
}