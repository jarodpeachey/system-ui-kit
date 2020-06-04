import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FixedHeader = ({ children, primary, transparent, secondary }) => {
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  console.log(scroll);

  return (
    <Wrapper
      scrolled={scroll > 50}
      primary={primary}
      transparent={transparent}
      secondary={secondary}
    >
      <Container scrolled={scroll > 50} className="container wide">
        {children}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: ${(props) =>
    props.primary ?
      props.theme.color.primary.main :
      props.secondary ?
        props.theme.color.secondary.main :
        props.transparent ?
          props.scrolled ?
            'white' :
            'transparent' :
          'white'};
  color: ${(props) =>
    props.primary ?
      'white' :
      props.secondary ?
        'white' :
        props.transparent ?
          props.scrolled ?
            'inherit' :
            'white' :
          'inherit'};
  a {
    color: ${(props) =>
    props.primary ?
      'white' :
      props.secondary ?
        'white' :
        props.transparent ?
          props.scrolled ?
            'inherit' :
            'white' :
          'inherit'};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) =>
    props.primary ?
      'white' :
      props.secondary ?
        'white' :
        props.transparent ?
          props.scrolled ?
            props.theme.color.primary.main :
            'white' :
          'inherit'};
  }
  font-weight: 600;
  top: 0;
  width: 100%;
  a:hover {
    background: ${(props) =>
    props.primary ?
      '#ffffff20' :
      props.secondary ?
        '#ffffff20' :
        props.transparent ?
          props.scrolled ?
            '#88888820' :
            '#ffffff20' :
          '#88888820'};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 32px !important;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) => (props.scrolled ? '16px' : '32px')};
  padding-bottom: ${(props) => (props.scrolled ? '16px' : '32px')};
  justify-content: space-between;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

FixedHeader.propTypes = {
  children: PropTypes.object,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default FixedHeader;
