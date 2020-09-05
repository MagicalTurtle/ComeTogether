import React,{ useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'

import './App.scss';

import Nav from "./components/Nav";
import BasicStats from "./components/BasicStats";
import SpecialStats from "./components/SpecialStats"
import App from './App';


export const Home = () => {

    const ColorChanger = async () => {

        const heroElm = document.querySelector('#Hero')
        const mainElm = document.querySelector('#Main')
        
        const scrollAmount = -280;
        const { top } = heroElm.getBoundingClientRect();
        if (top - window.innerHeight < scrollAmount -330) {
            mainElm.style.backgroundColor = '#a5d5ac';

        } else {
            if (top - window.innerHeight < scrollAmount) {
                mainElm.style.backgroundColor = '#a4cad4';

            } else {
                mainElm.style.backgroundColor = '#c2a4d4';
            }
        }
        }
        

    return (
        <div>
            <div id="Main" className="App" onScroll={ColorChanger}>
                <Nav/>
                <BasicStats/>
                <section id="Hero"></section>
                <SpecialStats/>
            </div>
        </div>
    )
}
