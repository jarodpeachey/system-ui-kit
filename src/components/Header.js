import React from 'react';
import styled from 'styled-components';

const Header = ({ children, color }) => (
  <Wrapper color={color}>
    <Container className="container wide">{children}</Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'transparent'
      ? 'transparent'
      : 'white'};
  color: ${(props) =>
    props.color === 'primary'
      ? 'white'
      : props.color === 'secondary'
      ? 'white'
      : props.color === 'transparent'
      ? null
      : null};
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) =>
      props.color === 'primary'
        ? 'white'
        : props.color === 'secondary'
        ? 'white'
        : props.color === 'transparent'
        ? 'white'
        : props.theme.color.text.dark.one};
        transition: .15s;
  }
  // a {
  //   background: transparent;
  //   transition-duration: 0.15s !important;
  //   display: block !important;
  // }
  font-weight: 600;
  top: 0;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 26px !important;
  }
  transition: 0.15s;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
  justify-content: space-between;
  transition: 0.15s;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export default Header;
