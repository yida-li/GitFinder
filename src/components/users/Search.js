import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  static propTypes = {};

  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <form className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
