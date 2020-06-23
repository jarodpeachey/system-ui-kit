import React from 'react';
import styled, { css } from 'styled-components';

const Code = ({ children, className = '', customStyles, style }) => {
  return (
    <Wrapper style={style} customStyles={customStyles} className={className}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.code`
  font-size: 16px;
  padding: 2px 4px;
  background: ${(props) => props.theme.color.primary.main}20;
  margin: 0px 2px;
  border-radius: ${(props) => props.theme.radius.one};
`;

export default Code;
