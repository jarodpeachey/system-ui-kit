import React from 'react';
import styled, { css } from 'styled-components';

const Paragraph = ({
  children,
  className = '',
  title,
  color,
  customStyles,
}) => {
  return (
    <StyledParagraph
      customStyles={customStyles}
      color={color}
      title={title}
      className={className}
    >
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.background === 'dark'
      ? props.theme.color.text.light.two
      : props.theme.color.paragraph};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  line-height: 1.7;
  font-size: ${(props) => props.theme.fontSize.p}px;
  font-weight: 400;
`;

export default Paragraph;
