import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {};

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;
    console.log({ name });
    return <div> USER R {name} </div>;
  }
}

export default User;
