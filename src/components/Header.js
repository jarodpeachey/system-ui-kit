import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ children, color, scrollColor, fixed }) => {
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    setScroll(window.scrollY);
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Wrapper
      id="header"
      scrolled={scroll > 50}
      color={color}
      fixed={fixed}
      scrollColor={scrollColor}
    >
      <Container scrolled={scroll > 50} className="container wide">
        {children}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: background 0.3s;
  position: ${(props) => (props.fixed ? 'fixed' : '')};
  top: 0;
  width: 100%;
  z-index: 999;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'transparent'
      ? 'transparent'
      : 'white'};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .menu-item,
  .menu-item a,
  span,
  div {
    color: ${(props) =>
      props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'transparent'
        ? 'white'
        : props.theme.color.text.dark.one};
  }
    span {
      background: ${(props) =>
        props.color === 'primary' || props.color === 'secondary'
          ? 'white'
          : props.theme.color.text.dark.one} !important;
    }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 32px !important;
  }

  &.scrolled {
    background: ${(props) =>
      props.color === 'transparent' ? '#ffffffee' : null};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .menu-item,
    .menu-item a,
    span,
    div {
      color: ${(props) =>
        props.color === 'primary' || props.color === 'secondary'
          ? 'white'
          : props.theme.color.text.dark.one};
    }
    span {
      background: ${(props) =>
        props.color === 'primary' || props.color === 'secondary'
          ? 'white'
          : props.theme.color.text.dark.one} !important;
    }
  }
  &.open {
    // background: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) => (props.scrolled ? '16px' : '32px')};
  padding-bottom: ${(props) => (props.scrolled ? '16px' : '32px')};
  justify-content: space-between;
  transition: 0.3s;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

Header.propTypes = {
  children: PropTypes.object,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Header;
