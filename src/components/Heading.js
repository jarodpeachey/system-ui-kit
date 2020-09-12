import React from 'react';
import styled, { css } from 'styled-components';

const Heading = ({
  children,
  className,
  customStyles,
  darkBackground,
  type = 'h1',
  display,
  color,
}) => {
  return (
    <>
      {type === 'h1' && (
        <H1
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </H1>
      )}
      {type === 'h2' && (
        <H2
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </H2>
      )}
      {type === 'h3' && (
        <H3
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </H3>
      )}
      {type === 'h4' && (
        <H4
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </H4>
      )}
      {type === 'h5' && (
        <H5
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </H5>
      )}
      {type === 'h6' && (
        <H6
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </H6>
      )}
    </>
  );
};

const H1 = styled.h1`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground ? '#ffffff' :props.theme.color.text.heading};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-weight: 600;
  margin-bottom: 32px;
  font-size: ${(props) => props.theme.fontSize.h1}px;
`;
const H2 = styled.h2`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground ? '#ffffff' :props.theme.color.text.heading};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-weight: 600;
  margin-bottom: 32px;
  font-size: ${(props) => props.theme.fontSize.h2}px;
`;
const H3 = styled.h3`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground ? '#ffffff' :props.theme.color.text.heading};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-weight: 600;
  margin-bottom: 22px;
  font-size: ${(props) => props.theme.fontSize.h3}px;
`;
const H4 = styled.h4`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground ? '#ffffff' :props.theme.color.text.heading};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-weight: 600;
  margin-bottom: 22px;
  font-size: ${(props) => props.theme.fontSize.h4}px;
`;
const H5 = styled.h5`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground ? '#ffffff' :props.theme.color.text.heading};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-weight: 600;
  margin-bottom: 14px;
  font-size: ${(props) => props.theme.fontSize.h5}px;
`;
const H6 = styled.h6`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground ? '#ffffff' :props.theme.color.text.heading};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-weight: 600;
  margin-bottom: 14px;
  font-size: ${(props) => props.theme.fontSize.h6}px;
`;

export default Heading;
