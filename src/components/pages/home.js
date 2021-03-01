import React from 'react';
import { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default home;
