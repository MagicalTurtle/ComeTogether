import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="NavStyle">
            <div className="NavText">Main</div>
            <div className="NavText" onClick="location.href='/Compare">Compare</div>
        </div>
    )
}

export default Nav