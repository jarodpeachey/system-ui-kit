import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MobileMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const toggleFunction = () => {
    if (open) {
      console.log('removing');
      document.getElementById('header').classList.remove('open');
    } else {
      document.getElementById('header').classList.add('open');
    }
    setOpen(!open);
  };

  const onScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <>
      <MobileMenuToggle
        scrolled={scroll}
        onClick={() => toggleFunction()}
        open={open}
      >
        <MobileMenuRotate open={open}>
          <span />
          <span />
          <span />
        </MobileMenuRotate>
      </MobileMenuToggle>
      <Wrapper id="mobile-menu" className="container" open={open}>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  background: ${(props) => (props.open ? '#ffffff' : 'transparent')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.03),
      0 4px 16px -6px rgba(0, 0, 0, 0.5);
  width: 100%;
  transition: all 0.3s, background 0.3s;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '300000px' : '0')} !important;
  padding-top: ${(props) => (props.open ? '103px' : '0px')};
  padding-bottom: ${(props) => (props.open ? '27.5px' : '0px')};
  height: fit-content;
  z-index: -1;
  backdrop-filter: blur(10px);
  ::after {
    width: 100%;
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  z-index: 9999;
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    display: block;
  }
  transform: rotate(0deg);
    transition: all .15s ease-out;
  cursor: pointer;
  margin-left: auto;
  position: ${(props) => (props.open ? 'relative' : 'static')};
  // right: ${(props) => (props.open ? '12px' : 'none')};
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${(props) =>
      props.open ? props.theme.color.text.dark.one : 'white'};
    border-radius: 20px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
      props.open ? 'all 0.15s ease-in' : 'all 0.15s ease-out'};
  }

  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 1px)' : '10%')};
  }
  span:nth-child(2) {
    top: calc(50% - 2px);
    left: 0;
    transform-origin: left center;
        opacity: ${(props) => (props.open ? 0 : 1)};
  }
  span:nth-child(3) {
    top: ${(props) => (props.open ? '0' : 'calc(90% - 4px)')};
    left: ${(props) => (props.open ? 'calc(50% - 1px)' : '0')};
    transform-origin: left center;
    width: 100%;
    height: ${(props) => (props.open ? '100%' : '2px')};
    width: ${(props) => (props.open ? '2px' : '100%')};
    transform-origin: left center;
    // transform: ${(props) => (props.open ? 'rotate(90deg)' : 'none')};
  }
`;

const MobileMenuRotate = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) =>
    props.open ? 'all 0.15s ease-in-out' : 'all 0.15s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;
export default MobileMenu;
