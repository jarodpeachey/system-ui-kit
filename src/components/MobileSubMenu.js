import React from 'react';
import styled from 'styled-components';

const Mobile = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  border-radius: ${(props) => props.theme.radius.one};
  background: #ffffff;
  padding: 8px 0;
  width: 100%;
  // box-shadow: ${(props) => props.theme.shadow.one};
`;

export default Mobile;
