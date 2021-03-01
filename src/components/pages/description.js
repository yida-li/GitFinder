import React, { Fragment } from 'react';

export const description = () => {
  return (
    <Fragment>
      <h1> Current List of Plannets: </h1>

      <nav className='navbar bg-dark'>
        <h1>
          <i class='fas fa-globe-asia'> Reddit </i>
        </h1>
      </nav>
      <nav className='navbar bg-white'>
        <h1>
          <i class='fas fa-globe-africa'> Discord </i>
        </h1>
      </nav>
      <nav className='navbar bg-danger'>
        <h1>
          <i class='fas fa-globe-europe'> Twitter </i>
        </h1>
      </nav>
    </Fragment>
  );
};
