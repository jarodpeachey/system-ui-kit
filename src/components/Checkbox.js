import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { calculateColor } from '../utils/color';

const Checkbox = ({
  children,
  className,
  id,
  onChange,
  disabled,
  checked = false,
  color,
  icon = <FontAwesomeIcon icon="check" />,
}) => {
  const [inputChecked, setInputChecked] = useState(checked);

  const name = (Math.random() / 32) * 2.34;

  const customOnChange = (e) => {
    setInputChecked(!inputChecked);
    console.log(inputChecked);

    console.log('Target from component: ', e.target);
    e.target.checked = !inputChecked;
    onChange &&
      onChange({
        ...e,
        target: {
          ...e.target,
          checked: !inputChecked,
        },
      });
  };

  useEffect(() => {
    document.getElementById(name).setAttribute('checked', inputChecked);
  }, [inputChecked]);

  return (
    <CheckboxWrapper
      className={className}
      id={id}
      checked={inputChecked}
      disabled={disabled}
      htmlFor={name}
      color={color}
    >
      <input
        id={name}
        onChange={customOnChange}
        disabled={disabled}
        name={name}
        type="checkbox"
        checked={inputChecked}
      />
      <span className="checkmark mr-2">
        <div className="icon">{icon}</div>
      </span>
      {children}
    </CheckboxWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.theme.spacing.two}px 0;
`;

const CheckboxWrapper = styled.label`
  width: fit-content;
  color: ${(props) => (props.disabled ? 'rgb(190, 190, 190)' : '')};
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  input {
    position: absolute;
    opacity: 0;
    left: 0;
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};
    z-index: 999;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .checkmark {
    height: 18px;
    width: 18px;
    background-color: #eee;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: 1px solid
      ${(props) =>
        props.disabled ? props.theme.color.gray.two : props.theme.color.gray.four};
    background: #ffffff;
    transition: 0.1s;
  }
  input:checked ~ .checkmark {
    background: ${(props) =>
      props.disabled
        ? props.theme.color.gray.four
        : calculateColor(props.color, props.theme.color)};
    border: 1px solid
      ${(props) =>
        props.disabled
          ? props.theme.color.gray.four
          : calculateColor(props.color, props.theme.color)};
  }
  .icon {
    display: none;
  }
  // input:checked ~ .icon {
  //   display: block;
  // }
  input:checked ~ .checkmark > .icon {
    font-size: 12px;
    color: white;
    top: 0px;
    position: relative;
    display: block;
    transition: 0.1s;
  }
  // input:focus ~ .checkmark {
  //   box-shadow: 0px 0px 0px 3px ${(props) =>
    calculateColor(props.color, props.theme.color)}30 !important;
  // }
    input:hover ~ .checkmark {
    border: 1px solid ${(props) =>
      props.disabled ? 'rgb(230, 230, 230)' : props.theme.color.gray.four};
  }
    input:checked:hover ~ .checkmark {
    border: 1px solid ${(props) =>
      props.disabled
        ? props.theme.color.gray.four
        : `${calculateColor(props.color, props.theme.color)}`};
  }
`;

Checkbox.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;
