import React, { Component, Fragment } from 'react';

import './App.css';
import Navbar from './components/layout/Navbar';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { about } from './components/pages/about';
import User from './components/users/User';

class App extends Component {
  state = { users: [], user: {}, loading: false, alert: null, repos: [] };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => this.setState({ users: [], loading: false });

  // get the info of a single Github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };
  // get users repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ repos: res.data, loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    const { users, loading, user, repos } = this.state;

    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />

          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />

                    <Users loading={loading} users={users}></Users>
                  </Fragment>
                )}
              />

              <Route exact path='/about' component={about} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
