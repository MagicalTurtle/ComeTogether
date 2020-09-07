import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import {Callback} from './Callback'; // bruh who puts spaces between squigly bois
import { Compare } from './Compare';
import { Error404 } from './Error404';


import './App.scss';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
             <Route path="/callback" component={Callback} />
            <Route path="/compare" component={Compare} />
            <Route component={Error404} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
