import React from 'react';

export const TextButton = (props) => {
  return (
    <button className='hover:text-blue-500 focus:outline-none whitespace-nowrap'>
      {props.children}
    </button>
  );
};
