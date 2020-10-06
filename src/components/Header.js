import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Container from './Container';

const Header = ({
  children,
  className,
  customStyles,
  color,
  scrollColor,
  height,
  scrollHeight,
  fixed,
  fullWidth,
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

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', onScroll);
      }
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
      customStyles={customStyles}
    >
      <Container
        customStyles={`
          position: relative;
          ${
            fullWidth
              ? 'padding-left: 24px; padding-right: 24px; width: 100%;'
              : ''
          }
        `}
        maxWidth={fullWidth ? 99999 : null}
      >
        <InnerContainer color={color} scrolled={window.scrollY > 50}>
          {children}
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: all 0.3s, border-bottom 0.15s ease 0.3s;
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
      : props.color === 'dark'
      ? props.theme.color.gray.six
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
    transition: all 0.3s;
    color: ${(props) =>
      props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'dark' ||
      props.color === 'transparent'
        ? 'white'
        : null};
  }
  .mobile-menu-toggle span {
    background: ${(props) =>
      props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'dark' ||
      props.color === 'transparent'
        ? 'white'
        : null} !important;
  }

  &.scrolled {
    min-height: ${(props) =>
      props.scrollHeight ? `${props.scrollHeight}px` : null};
    box-shadow: ${(props) => props.theme.shadow.header};
    background: ${(props) =>
      props.scrollColor === 'primary'
        ? props.theme.color.primary
        : props.scrollColor === 'secondary'
        ? props.theme.color.secondary
        : props.scrollColor === 'transparent'
        ? 'transparent'
        : props.scrollColor === 'white'
        ? '#ffffff'
        : props.scrollColor === 'dark'
        ? props.theme.color.gray.six
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
        props.scrollColor === 'primary' ||
        props.scrollColor === 'secondary' ||
        props.scrollColor === 'dark'
          ? 'white'
          : props.theme.color.text.heading};
    }
    .mobile-menu-toggle span {
      background: ${(props) =>
        props.scrollColor === 'primary' ||
        props.scrollColor === 'secondary' ||
        props.scrollColor === 'dark'
          ? 'white'
          : props.theme.color.text.heading} !important;
    }
  }
  ${(props) => props.customStyles}
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

Header.propTypes = {
  children: PropTypes.object,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Header;
