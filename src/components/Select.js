import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Option from './Option';
import Text from './Text';
import { theme } from '../theme';

const Select = ({ children, className, id, size, variant }) => {
  const newChildren = [];

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onChange = (e) => {
    console.log(e);
    setSelectedValue(e[0]);
    setSelectedLabel(e[1]);
    setOpen(false);
  };

  return (
    <Wrapper>
      <SelectWrapper
        className={className}
        id={id}
        open={open}
        size={size}
        variant={variant}
        onClick={toggleOpen}
      >
        {selectedLabel || <Text>Select a value</Text>}
        <FontAwesomeIcon
          style={{
            marginLeft: 12,
            transform: `${open ? 'rotate(180deg)' : 'none'}`,
            transition: 'all .1s ease-in-out',
            fontSize: 14
          }}
          icon="chevron-down"
        />
      </SelectWrapper>
      <SelectMenu open={open}>
        {children.forEach((child) => {
          console.log(child);

          newChildren.push(
            <Option
              {...child.props}
              selected={selectedValue === child.props.value}
              onClick={(e) => onChange(e)}
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
      : props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '16px 18px'
      : '13px 15px'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '13px'
      : props.size === 'small'
      ? '14px'
      : props.size === 'large'
      ? '17px'
      : '15px'};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  transition-duration: 0.15s;
  border: ${(props) =>
    props.open
      ? `1px solid ${props.theme.color.primary}`
      : `1px solid ${props.theme.color.gray.four}`};
  :hover {
    border: ${(props) =>
      props.open
        ? `1px solid ${props.theme.color.primary}`
        : `1px solid ${props.theme.color.gray.four}`};
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
  border-radius: ${(props) => props.theme.radius.one};
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
