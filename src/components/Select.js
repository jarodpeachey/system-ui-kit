import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Option from './Option';

const Select = ({ children, name = 'default' }) => {
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
      <SelectWrapper onClick={toggleOpen}>
        {selectedLabel || 'Select a value'}
        <FontAwesomeIcon
          style={{
            marginLeft: 12,
            transform: `${open ? 'rotate(180deg)' : 'none'}`,
            transition: 'all .1s ease-in-out',
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
  padding: 14px 14px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  border: 1px solid rgb(195, 195, 195);
  :focus {
    outline: ${(props) => props.theme.color.primary.main} auto 1px;
  }
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
