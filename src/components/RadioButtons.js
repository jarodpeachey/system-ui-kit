import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioButtons = ({
  children,
  className,
  id,
  onChange,
  name = 'default',
  color,
  inline
}) => {
  const [checked, setChecked] = useState(false);
  const newChildren = [];

  const customOnChange = (e) => {
    onChange && onChange(e);
  };

  // const getCheckedChild = () => {
  //   let checkedChild = null;
  //   children.forEach((child, index) => {
  //     if (child.props.checked) {
  //       checkedChild = index;
  //     } else {
  //       console.log('NULL');
  //     }
  //   });

  //   console.log(checkedChild);

  //   return checkedChild;
  // };

  return (
    <Wrapper className={className} id={id}>
      {children.forEach((child, index) => {
        newChildren.push(
          <RadioButton
            onChange={(e) => customOnChange(e)}
            color={color}
            {...child.props}
            name={name}
            inline={inline}
            // checked={getCheckedChild() === index}
          >
            {child.props.children}
          </RadioButton>,
        );
      })}
      {newChildren}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

RadioButtons.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default RadioButtons;
