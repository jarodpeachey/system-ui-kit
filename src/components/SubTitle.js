import React from 'react';
import styled, { css } from 'styled-components';

const SubTitle = ({
  children,
  className,
  customStyles,
  background,
  light,
  type = 'p',
  title,
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
          title={title}
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
          title={title}
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
          title={title}
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
          title={title}
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
          title={title}
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
          title={title}
        >
          {children}
        </H6>
      )}
      {type !== 'h1' &&
        type !== 'h2' &&
        type !== 'h3' &&
        type !== 'h4' &&
        type !== 'h5' &&
        type !== 'h6' && (
          <P
            className={className}
            background={background}
            customStyles={customStyles}
            color={color}
            title={title}
          >
            {children}
          </P>
        )}
    </>
  );
};
const P = styled.p`
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
      : props.theme.color.text.dark.two};

  font-weight: normal;
  font-size: 20px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;
const H1 = styled.h1`
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
      : props.theme.color.text.dark.two};

  font-weight: normal;
  font-size: 20px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;
const H2 = styled.h2`
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
      : props.theme.color.text.dark.two};

  font-weight: normal;
  font-size: 20px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;
const H3 = styled.h3`
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
      : props.theme.color.text.dark.two};

  font-weight: normal;
  font-size: 20px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;
const H4 = styled.h4`
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
      : props.theme.color.text.dark.two};

  font-weight: normal;
  font-size: 20px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;
const H5 = styled.h5`
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
      : props.theme.color.text.dark.two};

  font-weight: normal;
  font-size: 20px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;
const H6 = styled.h6`
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
      : props.theme.color.text.dark.two};

  font-weight: normal;
  font-size: 20px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default SubTitle;
