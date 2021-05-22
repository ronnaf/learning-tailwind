import { ChevronUpIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { AccordionItem } from './AccordionItem';

export const Accordion = (props) => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='font-bold'>{props.title}</div>
        <ChevronUpIcon className='w-5' />
      </div>
      <div className='h-4' />
      <AccordionItems>
        {props.items.map((item, index) => (
          <AccordionItem key={index} title={item.title} count={item.count} />
        ))}
      </AccordionItems>
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string.isRequired,
};

const AccordionItems = styled.div`
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;
