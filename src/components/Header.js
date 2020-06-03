import React from 'react';
import styled from 'styled-components';

const Header = ({ children, primary, transparent, secondary }) => {
  return (
    <Wrapper primary={primary} transparent={transparent} secondary={secondary}>
      <Container className='container wide'>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) =>
    props.primary
      ? props.theme.color.primary.main
      : props.secondary
      ? props.theme.color.secondary.main
      : props.transparent
      ? 'transparent'
      : 'white'};
  color: ${(props) =>
    props.primary
      ? 'white'
      : props.secondary
      ? 'white'
      : props.transparent
      ? 'inherit'
      : 'inherit'};
  a {
    color: ${(props) =>
      props.primary
        ? 'white'
        : props.secondary
        ? 'white'
        : props.transparent
        ? 'inherit'
        : 'inherit'};
  }
  font-weight: 600;
  top: 0;
  width: 100%;
  a:hover {
    background: ${(props) =>
      props.primary
        ? '#ffffff20'
        : props.secondary
        ? '#ffffff20'
        : props.transparent
        ? '#ffffff20'
        : '#66666620'};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  justify-content: space-between;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export default Header;
