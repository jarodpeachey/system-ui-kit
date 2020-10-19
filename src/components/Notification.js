import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Notification = ({ children, className, id, color, time = 2000 }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [animate, setAnimate] = useState(false);

  const onClick = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 250);
    }, time);
  }, []);

  return (
    <Wrapper className={className} id={id} show={showNotification}>
      <NotificationWrapper animate={animate} color={color}>
        {children}
      </NotificationWrapper>
    </Wrapper>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {    transform: translateY(0);

  }
  to {
        transform: translateY(200px);

  }
`;

const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.theme.spacing.three}px 0;
  padding: 16px 24px;
  font-size: ${(props) => props.theme.fontSize.alert};

  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.gray.six};
  color: white;
  border-radius: ${(props) => props.theme.radius.one};

  animation: ${(props) => (props.animate ? slideDown : slideUp)} 0.3s;
  transform: ${(props) =>
    props.animate ? 'translateY(200px)' : 'translateY(0)'};
  transition: 0.1s;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.gray.two};
  * {
    color: ${(props) => (props.color ? 'white' : null)};
  }
  z-index: 999999;
  position: relative;
  box-shadow: ${(props) => props.theme.shadow.three};
  ${(props) => props.customStyles};
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  z-index: 999999;
`;

export default Notification;
