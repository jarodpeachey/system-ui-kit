import React from 'react';
import styled from 'styled-components';

const Hidden = ({ children, show, hide }) => {
  return (
    <>
      {show && <ShowWrapper show={show}>{children}</ShowWrapper>}
      {hide && <HideWrapper hide={hide}>{children}</HideWrapper>}
    </>
  );
};

const ShowWrapper = styled.div`
  display: none;
  @media (min-width: ${(props) => props.show}px) {
    display: block;
  }
`;
const HideWrapper = styled.div`
  display: block;
  @media (min-width: ${(props) => props.hide}px) {
    display: none;
  }
`;

export default Hidden;
