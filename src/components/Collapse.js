import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../theme';

const Collapse = ({
  children,
  className,
  id,
  startOpen,
  customStyles,
  titleStyles,
  bodyStyles,
  padding = 16,
}) => {
  const [open, setOpen] = useState(startOpen);
  const [hover, setHover] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(children[1]);

  const bodyChildren = useRef();

  useEffect(() => {
  });

  const onClick = () => {
    setOpen(!open);
  };
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Wrapper
      padding={padding}
      className={className}
      id={id}
      customStyles={customStyles}
    >
      <Title
        padding={padding}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        customStyles={titleStyles}
        open={open}
      >
        <Flex hAlign="space-between">
          <span>{children[0]}</span>
          <Toggle padding={padding} hover={hover} open={open}>
            <FontAwesomeIcon
              style={{
                fontSize: 14,
                transition: '.1s ease-out',
                fontWeight: 400,
              }}
              icon="chevron-right"
            />
          </Toggle>
        </Flex>
      </Title>
      <Body
        padding={padding}
        customStyles={bodyStyles}
        open={open}
        height={
          bodyChildren.current
            ? bodyChildren.current.children[0].clientHeight
            : 400
        }
      >
        <span ref={bodyChildren}>{children[1]}</span>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid ${theme.color.gray.two};
  // padding: 0px ${(props) => props.padding}px;
  position: relative;
  ${(props) => props.customStyles}
`;

const Toggle = styled.div`
  transform: rotate(${(props) => (props.open ? '90deg' : '0deg')});
  border-radius: 99px;
  // padding: ${(props) => props.padding}px;
  transition: color 0.1s ease-out, border 0.1s ease-out,
    transform 0.1s ease-in-out;
  display: flex;
  height: 16px;
  margin-top: 3px;
  margin-left: 6px;
  width: 16px;
  align-items: center;
  justify-content: center;
  color: 1px solid
    ${(props) =>
      props.hover
        ? props.theme.color.gray.one
        : props.theme.color.gray.six} !important;
  * {
    color: 1px solid
      ${(props) =>
        props.hover
          ? props.theme.color.gray.one
          : props.theme.color.gray.six} !important;
  }
`;

const Title = styled.button`
  border: none;
  width: 100%;
  display: block;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  text-align: inherit;
  color: inherit;
  font-weight: inherit;
  margin: inherit;
  padding: 0px;
  outline: none;
  cursor: pointer;
  // padding: 10px;
  // padding-left: ${(props) => props.padding}px;
  // padding-right: ${(props) => props.padding}px;
  // width: calc(100% + ${(props) => props.padding * 2}px);
  // left: -${(props) => props.padding}px;
  position: relative;
  :hover {
    background: ${theme.color.gray.one};
  }
  ${(props) => props.customStyles}
`;

const Body = styled.div`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  // width: calc(100% + ${(props) => props.padding * 2}px);
  // left: -${(props) => props.padding}px;
  position: relative;
  max-height: ${(props) => (props.open ? `${props.height}px` : '0')} !important;
  ${(props) => props.customStyles}
`;

export default Collapse;
