import React from 'react';
import styled from 'styled-components';

const Section = ({ children, className, id, customStyles, background }) => {
  return (
    <StyledSection
      className={className}
      id={id}
      customStyles={customStyles}
      background={background}
    >
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  z-index: 1;
  background: ${(props) => props.background};
  padding: ${(props) => props.theme.spacing.section.desktop}px 0;
  ${(props) => props.customStyles}
`;

export default Section;
