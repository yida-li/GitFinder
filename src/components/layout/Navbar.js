import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ icon, title }) => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1>
          <i class='fas fa-binoculars'></i>
          {title}
          <i class='fas fa-binoculars'></i>
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/description'>Description</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: 'Human Tracker Protoype',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
