import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme';

const Section = ({ children, className, id, background, spacing }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSection
      className={className}
      id={id}
      spacing={spacing}
      background={background}
    >
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
  z-index: 1;
  background: ${(props) => props.background};
  padding: ${(props) =>
      props.spacing === 'small'
        ? 44
        : props.spacing === 'large'
        ? 78
        : props.spacing || 52}px
    0;
`;

export default Section;
