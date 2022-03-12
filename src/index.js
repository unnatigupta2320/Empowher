import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/SideBar/SideBar.js';
import './styling/index.css';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <div class="splitscreen">
          <div class="left">
            <Sidebar />
          </div>
          <div class="right">
            <Route path='/' exact component={HomePage} />
            <Route path='/about' component={HomePage} />
            <Route path='/products' component={HomePage} />
            <Route path='/contact-us' component={HomePage} />
            <Route path='/sign-up' component={HomePage} />
            <Route path='/marketing' component={HomePage} />
            <Route path='/consulting' component={HomePage} />
          </div>
        </div>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);