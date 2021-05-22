import { BellIcon } from '@heroicons/react/outline';
import React from 'react';
import logo from './../logo.svg';
import { TextButton } from './TextButton';

export const Header = () => {
  return (
    <div className='flex items-center px-24 py-4 shadow-sm'>
      <div className='flex items-center flex-1'>
        <img className='w-14' alt='' src={logo} />
        <div className='text-lg font-bold'>Tailwind Practice</div>
      </div>
      <div className='flex justify-center flex-1 space-x-8'>
        <TextButton>Find a Job</TextButton>
        <TextButton>Company Review</TextButton>
        <TextButton>Find Salaries</TextButton>
      </div>
      <div className='flex items-center justify-end flex-1 space-x-2'>
        <BellIcon className='w-5' />
        <div className='text-gray-400'>|</div>
        <div className='flex-shrink-0 w-6 h-6 bg-gray-500 rounded-full' />
        <div className='whitespace-nowrap'>Ronna Firmo</div>
      </div>
    </div>
  );
};
