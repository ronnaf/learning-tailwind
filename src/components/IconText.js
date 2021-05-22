import PropTypes from 'prop-types';
import React from 'react';

export const IconText = (props) => {
  return (
    <div className='flex items-center space-x-2'>
      <props.icon className='w-5 text-blue-500' />
      <div className='whitespace-nowrap'>{props.title}</div>
    </div>
  );
};

IconText.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};
