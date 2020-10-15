import React, { Component, Fragment } from 'react';

import './App.css';
import Navbar from './components/layout/Navbar';
import {Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { about } from './components/pages/about';

class App extends Component {
  state = { users: [], loading: false, alert: null };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    const { users, loading } = this.state;

    return (
      <BrowserRouter>
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Switch>
            <Route exact path= '/' render={props=>(<Fragment>
               <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />

          <Users loading={loading} users={users}></Users>
            </Fragment>)}/>


              <Route exact path ='/about' component ={about}/>

          </Switch>
          <Alert alert={this.state.alert} />
         
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
