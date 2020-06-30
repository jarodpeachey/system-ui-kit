import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Container from './Container';

const Header = ({ children, className, color, scrollColor, fixed }) => {
  const [scroll, setScroll] = useState(
    typeof window !== 'undefined' && window.scrollY,
  );
  const onScroll = () => {
    setScroll(window.scrollY);

    if (window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }
  };

  useEffect(() => {
    if (window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Wrapper
      className={className}
      id="header"
      scrolled={window.scrollY > 50}
      color={color}
      fixed={fixed}
      scrollColor={scrollColor}
    >
      <Container>
        <InnerContainer color={color} scrolled={window.scrollY > 50}>
          {children}
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: all 0.3s, border-bottom .15s ease .3s;
  position: ${(props) => (props.fixed ? 'fixed' : '')};
  top: 0;
  width: 100%;
  z-index: 999;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
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
  div {
    transition: all .3s;
    color: ${(props) =>
      props.color === 'primary'
        ? 'white'
        : props.color === 'secondary'
        ? 'white'
        : props.color === 'transparent'
        ? 'white'
        : null};
  }
  span {
    background: ${(props) =>
      props.color === 'primary'
        ? 'white'
        : props.color === 'secondary'
        ? 'white'
        : props.color === 'transparent'
        ? 'white'
        : props.theme.color.heading} !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 32px !important;
  }

  #mobile-menu::after {
    background: ${(props) =>
      props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'transparent'
        ? 'transparent'
        : 'white'};
    height: ${(props) =>
      props.color === 'primary' || props.color === 'secondary'
        ? '71px'
        : '103px'};
  }
  }

  &.scrolled {
    box-shadow: 0 0 4px 0 rgba(17,22,26,0.08), 0 2px 4px 0 rgba(17,22,26, 0.03), 0 4px 8px 0 rgba(17,22,26, 0.03);
    background: ${(props) =>
      props.color === 'transparent' ? '#fffffff9' : null};
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
          : props.theme.color.heading};
    }
    span {
      background: ${(props) =>
        props.color === 'primary' || props.color === 'secondary'
          ? 'white'
          : props.theme.color.heading} !important;
    }
  }
  border-bottom: 2px solid transparent;
  &.open {
    box-shadow: none !important;
    border-bottom: 2px solid ${(props) => props.theme.color.gray.one};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div,
    .menu-item,
    .menu-item a {
      color: ${(props) =>
        props.color === 'transparent' ? props.theme.color.heading : null};
    }
    transition: background 0s;
    span {
      background: ${(props) =>
        props.color === 'transparent'
          ? props.theme.color.heading
          : null} !important;
    }
  }
  border-bottom: none !important;
  &.open.scrolled {
    border-bottom: none !important;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) =>
    props.scrolled || props.color !== 'transparent' ? '16px' : '32px'};
  padding-bottom: ${(props) =>
    props.scrolled || props.color !== 'transparent' ? '16px' : '32px'};
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
