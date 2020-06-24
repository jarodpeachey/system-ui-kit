import React from 'react';
import styled, { css } from 'styled-components';

const H5 = ({ children, className = '', title, color, customStyles }) => {
  return (
    <StyledH5
      customStyles={customStyles}
      color={color}
      title={title}
      className={className}
    >
      {children}
    </StyledH5>
  );
};

const StyledH5 = styled.h5`
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  color: ${(props) =>
    props.title
      ? props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.theme.color.primary.main
      : null};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H5;
