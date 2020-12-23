import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Option from './Option';
import { theme } from '../theme';
import Span from './Span';

const Select = ({ children, className, id, variant, onChange }) => {
  const newChildren = [];

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const customOnChange = (e) => {
    console.log(e);
    setSelectedValue(e[0]);
    setSelectedLabel(e[1]);
    setOpen(false);

    if (onChange) {
      onChange(e[0]);
    }
  };

  return (
    <Wrapper>
      <SelectWrapper
        className={className}
        id={id}
        open={open}
        variant={variant}
        onClick={toggleOpen}
      >
        {selectedLabel || <Span>Select a value</Span>}
        <FontAwesomeIcon
          style={{
            marginLeft: 12,
            transform: `${open ? 'rotate(180deg)' : 'none'}`,
            transition: 'all .1s ease-in-out',
            fontSize: 14,
          }}
          icon="chevron-down"
        />
      </SelectWrapper>
      <SelectMenu open={open}>
        {children.forEach((child) => {
          newChildren.push(
            <Option
              {...child.props}
              selected={selectedValue === child.props.value}
              onClick={(e) => customOnChange(e)}
            >
              {child.props.children}
            </Option>,
          );
        })}

        {newChildren}
      </SelectMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-width: 150px;
  width: fit-content;
`;

const SelectWrapper = styled.div`
  padding: ${(props) =>
    props.size === 'xs'
      ? '4px 8px'
      : props.size === 'sm'
      ? '8px 12px'
      : props.size === 'lg'
      ? '16px 18px'
      : '13px 15px'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '14px'
      : props.size === 'sm'
      ? '16px'
      : props.size === 'lg'
      ? '18px'
      : '16px'};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  transition-duration: 0.1s;
  border: ${(props) =>
    props.open
      ? `1px solid ${props.theme.color.primary}`
      : `1px solid ${props.theme.color.gray.three}`};
  :hover {
    border: ${(props) =>
      props.open
        ? `1px solid ${props.theme.color.primary}`
        : `1px solid ${props.theme.color.gray.three}`};
  }
  ${(props) =>
    props.variant === 'filled' &&
    css`
      background: ${props.theme.color.gray.one};
      border: ${props.open
        ? `1px solid ${props.theme.color.primary}`
        : `1px solid ${props.theme.color.gray.one}`};
      :hover {
        border: ${props.open
          ? `1px solid ${props.theme.color.primary}`
          : `1px solid ${props.theme.color.gray.one}`};
      }
      :focus {
        border: 1px solid ${props.theme.color.primary};
      }
    `}
`;

const SelectMenu = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: transform 0.1s ease-out,
    opacity 0.1s ease-out
      ${(props) => (props.open ? ', visibility 0s 0s' : ', visibility 0s .1s')};
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(.95)')};
  position: absolute;
  top: calc(100%);
  // padding-top: 20px;
  z-index: 999;
  border-radius: ${(props) => props.theme.radius.one}px;
  background: #ffffff;
  padding: 8px 0;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadow.one};
`;

Select.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Select;
