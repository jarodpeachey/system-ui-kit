import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ThemeContext } from '../theme';
import H4 from './H4';
import Paragraph from './Paragraph';

const Info = ({
  className,
  id,
  title,
  content,
  icon,
  variant,
  color,
  align,
  horizontal,
  customStyles,
  iconStyles,
  titleStyles,
  bodyStyles,
}) => {
  return (
    <StyledInfo
      className={className}
      id={id}
      variant={variant}
      color={color}
      align={align}
      title
      horizontal={horizontal}
      customStyles={customStyles}
    >
      {icon && (
        <Icon
          align={align}
          horizontal={horizontal}
          color={color}
          variant={variant}
          customStyles={iconStyles}
        >
          {icon}
        </Icon>
      )}
      <div>
        {title && (
          <Title customStyles={titleStyles} variant={variant}>
            {title}
          </Title>
        )}
        <Body customStyles={bodyStyles} variant={variant}>
          {content}
        </Body>
      </div>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-radius: ${(props) =>
    props.variant === 'light' || props.variant === 'filled'
      ? props.theme.radius.one
      : 0};
  background: ${(props) =>
    props.variant === 'filled'
      ? props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'dark'
        ? props.theme.color.gray.six
        : 'white'
      : 'white'};
  padding: ${(props) => (props.variant === 'filled' ? 24 : 0)}px;
  text-align: ${(props) => !props.horizontal && props.align};
  display: ${(props) => (props.horizontal ? 'flex' : null)};
  ${(props) => props.customStyles}
`;

const Icon = styled.div`
  color: ${(props) =>
    props.variant === 'filled'
      ? 'white'
      : props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'success'
      ? props.theme.color.success
      : props.theme.color.gray.six};
  font-size: 40px;
  margin-bottom: 12px;
  margin-right: ${(props) => (props.horizontal ? '16px' : null)};
  ${(props) => props.customStyles}
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSize.h5}px;
  margin: 0;
  font-weight: bold;
  color: ${(props) => (props.variant === 'filled' ? 'white' : null)};
  margin-bottom: 8px;
  ${(props) => props.customStyles}
`;

const Body = styled(Paragraph)`
  margin: 0;
  color: ${(props) => (props.variant === 'filled' ? '#ffffffcc' : null)};
  ${(props) => props.customStyles}
`;

export default Info;
