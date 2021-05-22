import React from 'react';
import { Button } from './Button';

export const AlertBox = () => {
  return (
    <div className='p-5 bg-blue-100 rounded-lg'>
      <div className='text-lg font-bold'>Create Job Alert</div>
      <div className='text-gray-600 '>
        Create a job alert now and never miss a job
      </div>
      <div className='h-6' />
      <input
        className='w-full px-3 py-2 rounded-lg focus:outline-none'
        placeholder='Enter job keyword'
      />
      <div className='h-4' />
      <Button>Create Job Alerts</Button>
    </div>
  );
};
