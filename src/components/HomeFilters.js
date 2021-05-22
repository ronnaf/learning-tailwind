import {
  BriefcaseIcon,
  LocationMarkerIcon,
  SearchIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/outline';
import React from 'react';
import tw from 'tailwind-styled-components';
import { IconInput } from './IconInput';

export const HomeFilters = () => {
  return (
    <div className='flex items-center h-16 bg-white rounded-md shadow-sm '>
      <SearchBoxItem className='flex-grow-[2]'>
        <IconInput icon={SearchIcon} />
      </SearchBoxItem>
      <SearchBoxItem>
        <IconInput icon={LocationMarkerIcon} defaultValue='Londontowne, MD' />
      </SearchBoxItem>
      <SearchBoxItem>
        <IconInput icon={BriefcaseIcon} placeholder='Job Type' />
      </SearchBoxItem>
      <SearchBoxItem className='border-none'>
        <IconInput icon={CurrencyDollarIcon} placeholder='Salary Range' />
      </SearchBoxItem>
      <button className='h-full px-6 font-bold text-white bg-blue-600 rounded-r-md'>
        Find Job
      </button>
    </div>
  );
};

const SearchBoxItem = tw.div`
  flex flex-1 space-x-4 px-8 h-full border-r-2 items-center
`;
