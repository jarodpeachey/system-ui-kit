import React from 'react';
import styled, { css } from 'styled-components';

const Paragraph = ({
  children,
  className,
  id,
  title,
  color,
  muted,
  customStyles,
}) => {
  return (
    <StyledParagraph
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      title={title}
      muted={muted}
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
        : props.color === 'text-one'
        ? props.theme.color.text.one
        : props.color === 'text-two'
        ? props.theme.color.text.two
        : props.color === 'text-three'
        ? props.theme.color.text.three
        : props.theme.color.paragraph}${(props) => (props.muted ? '90' : null)};
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
