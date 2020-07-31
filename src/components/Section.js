import React from 'react';
import styled from 'styled-components';

const Section = ({
  children,
  className,
  id,
  customStyles,
  background,
  spacing,
}) => {
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
  z-index: 1;
  background: ${(props) => props.background};
  padding: ${(props) => (props.spacing ? props.spacing : 52)}px 0;
  ${(props) => props.customStyles}
`;

export default Section;
