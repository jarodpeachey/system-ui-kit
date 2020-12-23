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
  padding: ${(props) => props.theme.spacing.desktop * 2}px;
  background: #ffffff;
  border-radius: ${(props) => props.theme.radius.two}px;
`;

export default Card;
