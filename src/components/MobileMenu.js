import React, { useState } from 'react';
import styled from 'styled-components';

const MobileMenu = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleFunction = () => {
    if (open) {
      document.getElementById('header').classList.remove('open');
    } else {
      document.getElementById('header').classList.add('open');
    }
    setOpen(!open);
  };

  return (
    <>
      <MobileMenuToggle onClick={toggleFunction} open={open}>
        <MobileMenuRotate open={open}>
          <span />
          <span />
          <span />
        </MobileMenuRotate>
      </MobileMenuToggle>
      <Wrapper className="container" open={open}>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  background: ${(props) => (props.open ? 'white' : 'transparent')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s, background 0.3s;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '300000px' : '0')} !important;
  padding-top: ${(props) => (props.open ? '103px' : '0px')};
  padding-bottom: ${(props) => (props.open ? '27.5px' : '0px')};
  height: fit-content;
  z-index: -1;
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
    transition: all .25s ease-out;
  cursor: pointer;
  margin-left: auto;
  position: ${(props) => (props.open ? 'relative' : 'static')};
  // right: ${(props) => (props.open ? '12px' : 'none')};
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${(props) =>
      props.open ? props.theme.color.text.dark.one : 'white'};
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
      props.open ? 'all 0.25s ease-in' : 'all 0.25s ease-out'};
  }

  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 2px)' : '10%')};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${(props) => (props.open ? 0 : 'calc(50% - 2px)')};
    left: ${(props) => (props.open ? 'calc(50% - 2px)' : '4px')};
    width: ${(props) => (props.open ? '4px' : '100%')};
    height: ${(props) => (props.open ? '100%' : '4px')};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 4px);
    transform-origin: left center;
    width: ${(props) => (props.open ? 0 : '100%')};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
`;

const MobileMenuRotate = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) =>
    props.open ? 'all 0.25s ease-in-out' : 'all 0.25s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;
export default MobileMenu;
