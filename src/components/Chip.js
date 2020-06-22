import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chip = ({ children, color = '', icon }) => {
  return (
    <Wrapper icon={!!icon} color={color}>
      {icon && <Icon>{icon}</Icon>}
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  width: fit-content;
  align-items: flex-start;
  font-size: 14px;
  margin-top: ${(props) => props.theme.spacing.three}px;
  margin-bottom: ${(props) => props.theme.spacing.three}px;
  margin-left: ${(props) => props.theme.spacing.one}px;
  margin-right: ${(props) => props.theme.spacing.one}px;
  padding: ${(props) => props.theme.spacing.one}px
    ${(props) => props.theme.spacing.two}px;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : '#efefef'};
  div {
    font-size: 14px;
    color: ${(props) => (props.color === '' ? '' : 'white')};
  }
  border-radius: 100px;
  padding-left: ${(props) => (props.icon ? '0' : '8px')};
`;

const CloseButton = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin-left: auto;
  padding-right: 14px;
`;
const Icon = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin-right: 14px;
  padding-left: 14px;
`;

export default Chip;
