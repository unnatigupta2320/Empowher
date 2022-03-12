import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage.js';
import Dashboard from './components/Dashboard.js';
import AboutUs from './components/AboutUs.js';
import Profile from './components/Profile.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/SideBar.js';
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
            <Route path='/about' component={AboutUs} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
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