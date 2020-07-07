import React, { useState } from 'react';
import styled from 'styled-components';
import { createPopper } from '@popperjs/core';
import { usePopper } from 'react-popper';

const Popover = ({ children, className, id, customStyles }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <Wrapper className={className} id={id} customStyles={customStyles}>
      {children}
      <div ref={setReferenceElement}>{children[0]}</div>
      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        {children[1]}
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props) => props.customStyles};
`;

export default Popover;
