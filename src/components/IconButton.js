import React from 'react';
import tw from 'tailwind-styled-components';

export const IconButton = (props) => {
  return <Container $active={props.$active}>{props.children}</Container>;
};

const Container = tw.div`
  p-1 border-2 rounded-lg
  ${(p) => (p.$active ? 'bg-blue-600' : 'bg-gray-100')}
  ${(p) => p.$active && 'border-white border-opacity-25'}
`;
