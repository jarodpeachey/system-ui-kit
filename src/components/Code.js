import React from 'react';
import styled, { css } from 'styled-components';

const Code = ({ children, className, id, customStyles, style }) => {
  return (
    <Wrapper
      className={className}
      id={id}
      style={style}
      customStyles={customStyles}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.code`
  font-size: 16px;
  padding: 0px 4px;
  background: ${(props) => props.theme.color.primary}20;
  margin: 0px 2px;
  border-radius: ${(props) => props.theme.radius.one};
`;

export default Code;
