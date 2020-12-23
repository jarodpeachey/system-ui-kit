import React from 'react';
import styled from 'styled-components';

const MobileSubMenu = ({ children, className, id }) => (
  <Wrapper className={className} id={id}>
    <InnerWrapper>{children}</InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 12px;
`;

const InnerWrapper = styled.div`
  padding: 12px;
  width: 100%;
  background: #ffffff10;
  border-radius: ${(props) => props.theme.radius.one}px;
`;

export default MobileSubMenu;
