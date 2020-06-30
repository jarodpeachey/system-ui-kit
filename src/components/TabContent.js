import React from 'react';
import styled, { css } from 'styled-components';

const TabContent = ({
  children,
  className,
  id,
  active,
  customStyles,
  value,
  name,
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      active={value === name}
      customStyles={customStyles}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid #efefef;
  border-radius: 3px;
  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `};
  ${(props) => props.customStyles};
`;

export default TabContent;
