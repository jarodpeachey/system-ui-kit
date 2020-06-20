import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme';

const Section = ({ children, background, className = '' }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSection className={className} background={background}>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
  z-index: 1;
  background: ${(props) => props.background};
  padding: 54px 0;
`;

export default Section;
