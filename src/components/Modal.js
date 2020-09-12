import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H3 from './H3';
import Flex from './Flex';

const Modal = ({ children, title, toggleFunction, noClose, noHeader }) => {
  const [close, setClose] = useState(false);
  const customToggleFunction = () => {
    setClose(true);
    setTimeout(() => {
      toggleFunction();
    }, 170);
  };
  return (
    <>
      {close ? (
        <ModalWrapperClose>
          <StyledModalClose noHeader={noHeader}>
            {!noHeader && (
              <Flex
                customStyles={`padding-bottom: 32px;`}
                hAlign="space-between"
              >
                {title && !noHeader && <H3 className="m-none">{title}</H3>}
                {!noClose && (
                  <CloseButton onClick={customToggleFunction}>
                    <FontAwesomeIcon icon="times" />
                  </CloseButton>
                )}
              </Flex>
            )}

            {children}
          </StyledModalClose>
        </ModalWrapperClose>
      ) : (
        <ModalWrapper close={close}>
          <StyledModal close={close} noHeader={noHeader}>
            {!noHeader && (
              <Flex
                customStyles={`padding-bottom: 32px;`}
                hAlign="space-between"
              >
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
      )}
    </>
  );
};

const background = keyframes`
  from {
    background: transparent;
  }
  to {
    background: #4b4f6120;
  }
`;

const backgroundClose = keyframes`
  from {
    background: #4b4f6120;
  }
  to {
    background: transparent;
  }

`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999 !important;
  animation: ${background} 170ms forwards;
  transition: background 0.17s ease-out;
`;

const ModalWrapperClose = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999 !important;
  animation: ${backgroundClose} 170ms forwards;
  transition: background 0.17s ease-out;
`;

const Title = styled.h2`
  position: absolute;
  top: 32px;
  left: 32px;
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
  color: ${(props) => props.theme.color.two};
  :hover {
    color: ${(props) => props.theme.color.one};
  }
`;

const zoom = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

const zoomOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  to {
    transform: scale(0.6);
    opacity: 0;
  }
`;

const StyledModal = styled.div`
  max-width: 100%;
  margin: 0 auto;
  min-width: 300px;
  @media (min-width: 576px) {
    min-width: 400px;
  }
  width: ${(props) => (props.full ? '90%' : 'fit-content')};
  max-width: 1200px;
  height: ${(props) => (props.full ? 'fit-content' : 'fit-content')};
  animation: ${zoom} 170ms forwards;
  position: relative;
  border-radius: 5px;
  z-index: 999;
  padding: 32px;
  background: white;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow.three};
`;

const StyledModalClose = styled.div`
  max-width: 100%;
  margin: 0 auto;
  min-width: 300px;
  @media (min-width: 576px) {
    min-width: 400px;
  }
  width: ${(props) => (props.full ? '90%' : 'fit-content')};
  max-width: 1200px;
  height: ${(props) => (props.full ? 'fit-content' : 'fit-content')};
  animation: ${zoomOut} 245ms forwards;
  position: relative;
  border-radius: 5px;
  z-index: 999;
  padding: 32px;
  background: white;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow.three};
`;

export default Modal;
