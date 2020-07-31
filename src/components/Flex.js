import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Flex = ({
  children,
  className,
  id,
  customStyles,
  flexDirection,
  hAlign,
  vAlign,
}) => (
  <Wrapper
    className={className}
    id={id}
    customStyles={customStyles}
    flexDirection={flexDirection}
    hAlign={hAlign}
    vAlign={vAlign}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  // flex-wrap: wrap;
  flex-direction: ${(props) =>
    props.flexDirection === 'column' ? 'column' : 'row'};
  align-items: ${(props) =>
    props.vAlign === 'stretch'
      ? 'stretch'
      : props.vAlign === 'flex-start'
      ? 'flex-start'
      : props.vAlign === 'flex-end'
      ? 'flex-end'
      : 'center'};
  justify-content: ${(props) =>
    props.hAlign === 'space-evenly'
      ? 'space-evenly'
      : props.hAlign === 'flex-start'
      ? 'flex-start'
      : props.hAlign === 'flex-end'
      ? 'flex-end'
      : props.hAlign === 'space-around'
      ? 'space-around'
      : props.hAlign === 'space-between'
      ? 'space-between'
      : 'center'};
  ${(props) =>
    props.direction === 'vertical' &&
    css`
      align-items: ${props.hAlign === 'stretch'
        ? 'stretch'
        : props.hAlign === 'flex-start'
        ? 'flex-start'
        : props.hAlign === 'flex-end'
        ? 'flex-end'
        : 'center'};
      justify-content: ${props.vAlign === 'space-evenly'
        ? 'space-evenly'
        : props.vAlign === 'flex-start'
        ? 'flex-start'
        : props.vAlign === 'flex-end'
        ? 'flex-end'
        : props.vAlign === 'space-around'
        ? 'space-around'
        : props.vAlign === 'space-between'
        ? 'space-between'
        : 'center'};
    `};
  ${(props) => props.customStyles}
`;

export default Flex;
