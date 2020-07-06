import React from 'react';
import styled from 'styled-components';

const Line = ({ children, className, id, customStyles, spacing }) => {
  return (
    <Wrapper className={className} id={id} customStyles={customStyles} spacing={spacing}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${(props) => props.height || '1'}px;
  background: ${(props) => props.theme.color.gray.three};
  margin: ${(props) => props.spacing || '24'}px 0;
  ${(props) => props.customStyles};
`;

export default Line;
