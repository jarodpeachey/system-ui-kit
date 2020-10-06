import React from 'react';
import styled, { css } from 'styled-components';

const Paragraph = ({ children, className, id, color, customStyles, size }) => {
  return (
    <StyledParagraph
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      size={size}
    >
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'one'
      ? props.theme.color.text.one
      : props.color === 'two'
      ? props.theme.color.text.two
      : props.color === 'three'
      ? props.theme.color.text.three
      : props.color === 'light-one'
      ? props.theme.color.text.light.one
      : props.color === 'light-two'
      ? props.theme.color.text.light.two
      : props.color === 'light-three'
      ? props.theme.color.text.light.three
      : props.theme.color.text.paragraph}};
        line-height: 1.7;
  font-size: ${(props) =>
    props.size === 'sm'
      ? props.theme.fontSize.small
      : props.size === 'lg'
      ? props.theme.fontSize.p + 2
      : props.theme.fontSize.p}px;
  font-weight: ${(props) => props.theme.fontWeight.body};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}

`;

export default Paragraph;
