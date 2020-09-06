import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Nav = () => {

    const changePage = async (page) => {
        document.location.href = `/${page}`;
    }
    

    return (
        <div id="NavBar" className="NavStyle animate__animated animate__slideInDown">
            <span id="NavMain" className="NavText">Main</span>
            <span id="NavComp" onClick={() => changePage ("Compare")} className="NavText">Compare</span>
        </div>
    )
}

export default Nav  