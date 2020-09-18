import React from 'react';
import styled, { css } from 'styled-components';

const Code = ({ children, className, id, customStyles, variant }) => {
  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
      variant={variant}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.code`
  font-size: 16px;
  padding: 0px 4px;
  background: ${(props) => props.theme.color.gray.one};
  margin: 0px 2px;
  border-radius: ${(props) => props.theme.radius.one};
  width: ${(props) => (props.variant === 'block' ? '100%' : 'fit-content')};
  display: ${(props) => (props.variant === 'block' ? 'block' : 'inline-block')};
  padding: ${(props) => (props.variant === 'block' ? '24px' : '0px 4px')};
`;

export default Code;
