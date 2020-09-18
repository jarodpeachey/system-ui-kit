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
}) => {
  const [open, setOpen] = useState(startOpen);
  const [hover, setHover] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(children[1]);

  const bodyChildren = useRef();

  useEffect(() => {
    console.log(bodyChildren.current.children[0].clientHeight);
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
    <Wrapper className={className} id={id} customStyles={customStyles}>
      <Title
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        customStyles={titleStyles}
        open={open}
      >
        <Flex hAlign="space-between">
          <span>{children[0]}</span>
          <Toggle hover={hover} open={open}>
            <FontAwesomeIcon
              style={{
                fontSize: 14,
                color: hover ? theme.color.gray.six : theme.color.gray.four,
                transition: '.15s ease-out',
                fontWeight: 400,
              }}
              icon="chevron-right"
            />
          </Toggle>
        </Flex>
      </Title>
      <Body
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
  padding: 0px 16px;
  position: relative;
  ${(props) => props.customStyles}
`;

const Toggle = styled.div`
  transform: rotate(${(props) => (props.open ? '90deg' : '0deg')});
  border-radius: 99px;
  padding: 16px;
  transition: color 0.15s ease-out, border 0.15s ease-out,
    transform 0.15s ease-in-out;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: 1px solid
    ${(props) =>
      props.hover
        ? props.theme.color.gray.one
        : props.theme.color.gray.five} !important;
  * {
    color: 1px solid
      ${(props) =>
        props.hover
          ? props.theme.color.gray.one
          : props.theme.color.gray.five} !important;
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
  padding: 16px;
  padding: 10px 16px;
  width: calc(100% + 32px);
  left: -16px;
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
  width: calc(100% + 32px);
  left: -16px;
  position: relative;
  max-height: ${(props) => (props.open ? `${props.height}px` : '0')} !important;
  ${(props) => props.customStyles}
`;

export default Collapse;
