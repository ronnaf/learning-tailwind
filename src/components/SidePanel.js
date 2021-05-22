import React from 'react';
import styled from 'styled-components';
import { Accordion } from './Accordion';
import { AlertBox } from './AlertBox';

export const SidePanel = () => {
  return (
    <div>
      <AlertBox />
      <div className='h-8' />
      <SideFilters>
        <Accordion
          title='Type of Employment'
          items={[
            { title: 'Full Time Jobs', count: 24 },
            { title: 'Part Time Jobs', count: 34 },
            { title: 'Remote Jobs', count: 34 },
            { title: 'Internship Jobs', count: 34 },
            { title: 'Contract', count: 34 },
            { title: 'Training', count: 34 },
          ]}
        />
        <Accordion
          title='Seniority Level'
          items={[
            { title: 'Student Level Jobs', count: 24 },
            { title: 'Entry Jobs', count: 34 },
            { title: 'Mid Jobs', count: 34 },
            { title: 'Senior Jobs', count: 34 },
            { title: 'Directors', count: 34 },
            { title: 'VP or Above', count: 34 },
          ]}
        />
        <Accordion
          title='Seniority Level'
          items={[
            { title: 'Student Level Jobs', count: 24 },
            { title: 'Entry Jobs', count: 34 },
            { title: 'Mid Jobs', count: 34 },
            { title: 'Senior Jobs', count: 34 },
            { title: 'Directors', count: 34 },
            { title: 'VP or Above', count: 34 },
          ]}
        />
      </SideFilters>
    </div>
  );
};

const SideFilters = styled.div`
  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;
