import { HeartIcon, ShareIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { IconButton } from './IconButton';

export const ProfileCard = (props) => {
  return (
    <div className='bg-white rounded-lg'>
      <div className='relative'>
        <img
          className='object-cover w-full h-64 rounded-t-lg'
          alt=''
          src={props.listing.headerImageLink}
        />
        <div className='absolute p-2 bg-white rounded-xl -bottom-14 left-16'>
          <img
            className='object-cover rounded-lg w-28 h-28'
            alt=''
            src={props.listing.profileImageLink}
          />
        </div>
      </div>
      <div className='px-16 py-24'>
        <div className='flex justify-between'>
          <div className='text-2xl font-bold'>{props.listing.title}</div>
          <div className='flex'>
            <IconButton>
              <HeartIcon className='w-5' />
            </IconButton>
            <div className='w-2' />
            <IconButton>
              <ShareIcon className='w-5' />
            </IconButton>
          </div>
        </div>
        <div className='h-4' />
        <div className='flex justify-between text-gray-600'>
          <div className='flex space-x-1'>
            <a
              className='font-bold text-blue-500'
              href={props.listing.patreonLink}>
              Patreon
            </a>
            <div>•</div>
            <div>{props.listing.address}</div>
          </div>
          <div className='flex space-x-1'>
            <div>{new Date(props.listing.datePosted).toDateString()}</div>
            <div>•</div>
            <div className='font-medium'>
              {props.listing.applicantCount} Applicants
            </div>
          </div>
        </div>
        <div className='h-8' />
        <div className='grid grid-cols-4 border-2 divide-x-2 rounded-lg'>
          <GridItem title='Experience' subtitle={props.listing.experience} />
          <GridItem title='Work Level' subtitle={props.listing.workLevel} />
          <GridItem
            title='Employee Type'
            subtitle={props.listing.employeeType}
          />

          <GridItem
            title='Salary Offer'
            subtitle={`${props.listing.salaryOffer} / month`}
          />
        </div>
        <div className='h-8' />
        <div>
          <div className='text-lg font-bold'>Overview</div>
          <div className='h-2' />
          <div>{props.listing.overview}</div>
        </div>
        <div className='h-8' />
        <div>
          <div className='text-lg font-bold'>Requirements</div>
          <div className='h-2' />
          <Requirements>
            {props.listing.requirements.map((requirement, index) => (
              <div key={index}>• {requirement}</div>
            ))}
          </Requirements>
        </div>
      </div>
    </div>
  );
};

const Requirements = styled.div`
  & > :not(:last-child) {
    margin-bottom: 8px;
  }
`;

ProfileCard.propTypes = {
  listing: PropTypes.shape({
    address: PropTypes.string,
    applicantCount: PropTypes.number,
    datePosted: PropTypes.string,
    employeeType: PropTypes.string,
    experience: PropTypes.string,
    headerImageLink: PropTypes.string,
    patreonLink: PropTypes.string,
    overview: PropTypes.string,
    profileImageLink: PropTypes.string,
    requirements: PropTypes.arrayOf(PropTypes.string),
    salaryOffer: PropTypes.number,
    title: PropTypes.string,
    workLevel: PropTypes.string,
  }),
};

const GridItem = (props) => {
  return (
    <div className='p-4'>
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
    </div>
  );
};
