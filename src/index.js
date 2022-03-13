import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard.js';
import AboutUs from './components/AboutUs.js';
import Profile from './components/Profile.js';
import Sidebar from './components/SideBar.js';
import Courses from './components/Courses.js';
import FeedBack from './components/FeedBack';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            <Route path='/' exact component={Dashboard} />
            <Route path='/about' component={AboutUs} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
            <Route path='/courses' component={Courses} />
            <Route path='/feedback' component={FeedBack} />
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