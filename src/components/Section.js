import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme';

const Section = ({ children, background, className = '' }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSection className={className} background={background}>
      <div className='container'>{children}</div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
  z-index: 1;
  background: ${(props) => props.color};
  padding: 64px 0;
`;

export default Section;
