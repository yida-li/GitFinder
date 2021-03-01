import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Users from './components/users/Users';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { about } from './components/pages/about';
import User from './components/users/User';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';
import home from './components/pages/home';
import { notFound } from './components/pages/notFound';
import { description } from './components/pages/description';
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/about' component={about} />
                <Route exact path='/user/:login' component={User} />
                <Route exact path='/description' component={description} />
                <Route component={notFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
