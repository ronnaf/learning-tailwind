import PropTypes from 'prop-types';
import React from 'react';

export const AccordionItem = (props) => {
  return (
    <div className='flex items-center justify-between mb-2'>
      <div className='flex items-center space-x-2'>
        <input type='checkbox' />
        <div>{props.title}</div>
      </div>
      <div className='p-1 text-xs font-bold text-gray-500 bg-gray-300 rounded-md'>
        {props.count}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
