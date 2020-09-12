import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Container from './Container';

const Header = ({
  children,
  className,
  color,
  scrollColor,
  height,
  scrollHeight,
  fixed,
}) => {
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
      height={height}
      scrollHeight={scrollHeight}
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
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 999;
  min-height: ${(props) => `${props.height}px` || 'fit-content'};
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
        : props.theme.color.text.heading} !important;
  }
  }

  &.scrolled {
    min-height: ${(props) =>
      props.scrollHeight ? `${props.scrollHeight}px` : null};
    box-shadow: 0 0 4px 0 rgba(17,22,26,0.08), 0 2px 4px 0 rgba(17,22,26, 0.03), 0 4px 8px 0 rgba(17,22,26, 0.03);
        background: ${(props) =>
          props.scrollColor === 'primary'
            ? props.theme.color.primary
            : props.scrollColor === 'secondary'
            ? props.theme.color.secondary
            : props.scrollColor === 'transparent'
            ? 'transparent'
            : props.scrollColor === 'white'
            ? '#ffffff'
            : null};
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
        props.scrollColor === 'primary' || props.scrollColor === 'secondary'
          ? 'white'
          : props.theme.color.text.heading};
    }
    span {
      background: ${(props) =>
        props.scrollColor === 'primary' || props.scrollColor === 'secondary'
          ? 'white'
          : props.theme.color.text.heading} !important;
    }
  }
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
        props.color === 'transparent' ? props.theme.color.text.heading : null};
    }
    transition: background 0s;
    span {
      background: ${(props) =>
        props.color === 'transparent'
          ? props.theme.color.text.heading
          : null} !important;
    }
  }
  &.open.scrolled {
    box-shadow: none !important;
    border-bottom: none !important;
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
        props.scrollColor === 'transparent'
          ? props.theme.color.text.heading
          : 'white'};
    }
    transition: background 0s;
    span {
      background: ${(props) =>
        props.scrollColor === 'transparent'
          ? props.theme.color.text.heading
          : 'white'} !important;
    }
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
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
