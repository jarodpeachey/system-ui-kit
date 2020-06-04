import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioButtons = ({ children, name = 'default' }) => {
  const newChildren = [];

  return (
    <Wrapper>
      {children.forEach((child) => {
        console.log(child);

        newChildren.push(
          <RadioButton name={name}>{child.props.children}</RadioButton>,
        );
      })}
      {newChildren}
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

RadioButtons.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default RadioButtons;