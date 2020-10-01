import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Option = ({ children, className, id, value, selected, onClick }) => {
  return (
    <Wrapper
      className={className}
      id={id}
      onClick={() => onClick([value, children])}
      active={selected}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 6px 16px;
  cursor: pointer;
  :hover {
    background: ${(props) =>
      props.active ? props.theme.color.primary : props.theme.color.gray.one};
  }
  color: ${(props) => (props.active ? 'white' : '')};
  background: ${(props) => (props.active ? props.theme.color.primary : '')};
  :active {
    background: ${(props) => props.theme.color.primary};
    color: white;
  }
`;

const OptionWrapper = styled.div``;

Option.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default Option;
