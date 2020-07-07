import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme';

const Section = ({
  children,
  className,
  id,
  customStyles,
  background,
  spacing,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSection
      className={className}
      id={id}
      customStyles={customStyles}
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
      props.spacing === 'sm' ? 44 : props.spacing === 'lg' ? 78 : 52}px
    0;
  ${(props) => props.customStyles}
`;

export default Section;
