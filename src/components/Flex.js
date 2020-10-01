import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Flex = ({
  children,
  className,
  id,
  customStyles,
  flexDirection,
  justifyContent = 'flex-start',
  alignItems = 'center',
}) => (
  <Wrapper
    className={className}
    id={id}
    customStyles={customStyles}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  // flex-wrap: wrap;
  flex-direction: ${(props) =>
    props.flexDirection === 'column' ? 'column' : 'row'};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  ${(props) => props.customStyles}
`;

export default Flex;
