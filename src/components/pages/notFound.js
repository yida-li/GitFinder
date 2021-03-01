import React from 'react';

export const notFound = () => {
  return (
    <div>
      <h1> Not found </h1>
      <p className='lead'>
        {' '}
        Unfortunately the person you are looking for does not exist
      </p>
      <p className='lead'> Or perhaps that person does not wish to be found </p>
    </div>
  );
};
