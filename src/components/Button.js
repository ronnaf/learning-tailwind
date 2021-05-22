import React from 'react';

export const Button = (props) => {
  return (
    <button className='px-4 py-2 font-bold text-white bg-blue-600 rounded-md'>
      {props.children}
    </button>
  );
};
