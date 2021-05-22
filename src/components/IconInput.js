import PropTypes from 'prop-types';
import React from 'react';

export const IconInput = (props) => {
  return (
    <div className='flex space-x-2'>
      <props.icon className='w-5 text-blue-500' />
      <input
        className='w-full focus:outline-none'
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

IconInput.propTypes = {
  icon: PropTypes.elementType.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};
