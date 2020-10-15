import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H3 from './H3';
import Flex from './Flex';

const Modal = ({ children, title, toggleFunction, noClose, noHeader }) => {
  const [close, setClose] = useState(false);
  const customToggleFunction = () => {
    setClose(true);
    toggleFunction();
  };
  return (
    <ModalWrapper close={close}>
      <StyledModal close={close} noHeader={noHeader}>
        {!noHeader && (
          <Flex customStyles={`padding-bottom: 32px;`} hAlign="space-between">
            {title && !noHeader && <H3 className="m-none">{title}</H3>}
            {!noClose && (
              <CloseButton onClick={customToggleFunction}>
                <FontAwesomeIcon icon="times" />
              </CloseButton>
            )}
          </Flex>
        )}

        {children}
      </StyledModal>
    </ModalWrapper>
  );
};

const background = keyframes`
  from {
    background: transparent;
  }
  to {
    background: #00000045;
  }
`;

const backgroundClose = keyframes`
  from {
    background: #00000045;
  }
  to {
    background: transparent;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  // width: 100vw;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999 !important;
  animation: ${background} 200ms forwards;
  transition: background 0.2s ease-out;
`;

const CloseButton = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: auto;
  color: ${(props) => props.theme.color.gray.four};
  :hover {
    color: ${(props) => props.theme.color.gray.five};
  }
`;

const zoom = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledModal = styled.div`
  max-width: 95%;
  margin: 0 auto;
  min-width: 300px;
  @media (min-width: 576px) {
    min-width: 400px;
  }
  @media (min-width: 1000px) {
    max-width: 1200px;
  }
  width: fit-content;
  height: fit-content;
  animation: ${zoom} 200ms forwards;
  position: relative;
  border-radius: 5px;
  z-index: 999;
  padding: 32px;
  background: white;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow.four};
`;

export default Modal;
