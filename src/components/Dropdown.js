import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from './DropdownItem';
import { Link } from '@reach/router';

const Dropdown = ({ children, className, id, align }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Wrapper
        className={className}
        id={id}
        onClick={() => {
          setShow(!show);
        }}
        open={show}
      >
        {children[0]}
        <SubMenuWrapper align={align} open={show}>
          <SubMenu align={align}>{children[1]}</SubMenu>
        </SubMenuWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  z-index: 999;
  transition-duration: 0.15s !important;
  a {
    display: block;
    width: fit-content;
    padding: ${(props) => (props.square ? '12px' : '12px 18px')};
    text-decoration: none;
    cursor: pointer;
    background: ${(props) =>
      props.open ? props.theme.color.gray.two : 'transparent'};
    border-radius: ${(props) => props.theme.radius.one};
    transition-duration: 0.15s !important;
    :hover {
      background: ${(props) => props.theme.color.gray.two};
    }
  }
`;

const SubMenuWrapper = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};

  transition: transform 0.1s ease-out,
    opacity 0.1s ease-out
      ${(props) => (props.open ? ', visibility 0s 0s' : ', visibility 0s .1s')};
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(.95)')};
  position: absolute;
  min-width: 100%;
  top: calc(100%);
  padding-top: 6px;
  margin: 0 auto;
  left: ${(props) => (props.align !== 'right' ? 0 : null)};
  right: ${(props) => (props.align === 'right' ? 0 : null)};
  z-index: 999;
  filter: drop-shadow(0px 0px 5px #00000015);
  // ::after {
  //   display: block;
  //   content: '';
  //   position: absolute;
  //   right: ${(props) => (props.align === 'right' ? '20px' : null)};
  //   left: ${(props) => (props.align !== 'right' ? '20px' : null)};
  //   top: 8px;
  //   width: 12px;
  //   height: 12px;
  //   transform: rotate(45deg);
  //   background: white;
  //   border-top: 1px solid #efefef;
  //   border-left: 1px solid #efefef;
  //   z-index: 9999;
  // }
`;

const SubMenu = styled.div`
  position: absolute;
  top: calc(100%);
  // padding-top: 20px;
  z-index: 999;
  border-radius: ${(props) => props.theme.radius.one};
  background: #ffffff;
  padding: 8px 0;
  min-width: 150px;
    right: ${(props) => (props.align === 'right' ? '0' : null)};
    left: ${(props) =>
      props.align !== 'right' ? '0' : null};  // box-shadow: ${(props) =>
  props.theme.shadow.one};
      // border: 1px solid #efefef;

`;

export default Dropdown;
