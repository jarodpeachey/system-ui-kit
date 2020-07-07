import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const InternalLink = ({ children, className, id, customStyles, to }) => {
  return (
    <Wrapper
      to={to}
      className={className}
      id={id}
      customStyles={customStyles}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  ${(props) => props.customStyles};
`;

export default InternalLink;
