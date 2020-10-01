import React, { useContext } from 'react';
import styled from 'styled-components';

const Card = ({ children, className, id, customStyles }) => {
  return (
    <StyledCard className={className} id={id} customStyles={customStyles}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  box-shadow: ${(props) => props.theme.shadow.four};
  padding: 40px;
  background: #ffffff;
`;

export default Card;
