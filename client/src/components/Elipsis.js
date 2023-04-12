import React from 'react';
import styled, { keyframes } from 'styled-components';

//
//  EllipsisAnimation I used from someone online, sadly do not remember where I got it from
//

const Ellipsis = () => (
  <div>
    <Dot />
    <Dot />
    <Dot />
  </div>
);

const EllipsisAnimation = keyframes`
  0% { transform: scale(1); }
  20% { transform: scale(1.2); }
  40% { transform: scale(1); }
`;

const Dot = styled.span`
  display: inline-block;
  margin: 0 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #21F292;
  animation: ${EllipsisAnimation} 1.2s infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export default Ellipsis;
