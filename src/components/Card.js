import { HeartIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import React from 'react';
import tw from 'tailwind-styled-components';
import { IconButton } from './IconButton';

const seniorityColors = {
  'full time': 'text-red-500',
  'senior level': 'text-purple-600',
};

export const Card = (props) => {
  return (
    <Constainer $active={props.active}>
      <div className='flex items-start justify-between '>
        <div className='flex space-x-4'>
          <img className='w-16 h-16 rounded-lg' alt='' src={props.imageLink} />
          <div>
            <div className='font-bold'>{props.title}</div>
            <div className='text-sm'>{props.subtitle}</div>
          </div>
        </div>
        <IconButton $active={props.active}>
          <HeartIcon className='w-5' />
        </IconButton>
      </div>
      <div className='h-4' />
      <div className='flex justify-between'>
        <div className='flex space-x-4'>
          {props.tags?.map((tag, index) => (
            <SeniorityTag key={index} $tag={tag}>
              {tag}
            </SeniorityTag>
          ))}
        </div>
        <div className='flex space-x-3'>
          <Freshness $active={props.active}>new</Freshness>
          <div className='font-bold text-gray-400'>4d</div>
        </div>
      </div>
    </Constainer>
  );
};

const Constainer = tw.div`
p-5 rounded-xl
  ${(p) => (p.$active ? 'bg-blue-600' : 'bg-white')}
  ${(p) => p.$active && 'text-white shadow-xl'}
`;

const Freshness = tw.div`
  font-bold 
  ${(p) => (p.$active ? 'text-white' : 'text-blue-500')}
`;

const SeniorityTag = tw.div`
  px-3 py-2 text-sm font-medium bg-gray-200 rounded-md
  ${(p) => seniorityColors[p.$tag]}
`;

Card.propTypes = {
  subtitle: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
