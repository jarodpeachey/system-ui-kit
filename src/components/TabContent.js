import React from 'react';
import styled, { css } from 'styled-components';

const TabContent = ({ active, children, customStyles, value, name }) => {
  return (
    <Wrapper active={value === name} customStyles={customStyles}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin-top: 16px;
  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `};
  ${(props) => props.customStyles};
`;

export default TabContent;
