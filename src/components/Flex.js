import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Flex = ({ children, className, id, direction, hAlign, vAlign }) => (
  <Wrapper
    className={className}
    id={id}
    direction={direction}
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
    props.direction === 'vertical' ? 'column' : 'row'};
  align-items: ${(props) =>
    props.vAlign === 'stretch'
      ? 'stretch'
      : props.vAlign === 'start'
      ? 'flex-start'
      : props.vAlign === 'end'
      ? 'flex-end'
      : 'center'};
  justify-content: ${(props) =>
    props.hAlign === 'space-evenly'
      ? 'space-evenly'
      : props.hAlign === 'start'
      ? 'flex-start'
      : props.hAlign === 'end'
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
        : props.hAlign === 'start'
        ? 'flex-start'
        : props.hAlign === 'end'
        ? 'flex-end'
        : 'center'};
      justify-content: ${props.vAlign === 'space-evenly'
        ? 'space-evenly'
        : props.vAlign === 'start'
        ? 'flex-start'
        : props.vAlign === 'end'
        ? 'flex-end'
        : props.vAlign === 'space-around'
        ? 'space-around'
        : props.vAlign === 'space-between'
        ? 'space-between'
        : 'center'};
    `};
`;

export default Flex;
