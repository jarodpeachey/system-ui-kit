import React from 'react';
import styled from 'styled-components';

const getPercentage = (current, max) => (100 * current) / max;

const getValue = (percentage, max) => (max / 100) * percentage;

const getLeft = (percentage) => `calc(${percentage}% - 5px)`;

const roundValueToStep = (value, step, min) => {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
};

const getDecimalPrecision = (num) => {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (
      (matissaDecimalPart ? matissaDecimalPart.length : 0) +
      parseInt(parts[1], 10)
    );
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

const Slider = ({
  className,
  id,
  initial = 0,
  max,
  formatFn = (number) => number.toFixed(0),
  onChange,
  color,
}) => {
  const initialPercentage = getPercentage(initial, max);

  const sliderRef = React.useRef();
  const thumbRef = React.useRef();
  const currentRef = React.useRef();
  const backgroundRef = React.useRef();

  const diff = React.useRef();

  const handleMouseMove = (event) => {
    let newX =
      event.clientX -
      diff.current -
      sliderRef.current.getBoundingClientRect().left;

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

    const start = 0;

    if (newX < start) {
      newX = 0;
    }

    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    const newValue = getValue(newPercentage, max);

    thumbRef.current.style.left = getLeft(newPercentage);
    backgroundRef.current.style.width = getLeft(newPercentage);
    currentRef.current.textContent = formatFn(newValue);

    onChange(newValue);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = (event) => {
    diff.current =
      event.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <Wrapper className={className} id={id}>
      <StyledSlider color={color} ref={sliderRef}>
        <StyledBackground
          style={{ width: `${initialPercentage}%` }}
          color={color}
          ref={backgroundRef}
        />
        <StyledThumb
          color={color}
          style={{ left: getLeft(initialPercentage) }}
          ref={thumbRef}
          onMouseDown={handleMouseDown}
        />
      </StyledSlider>
      <div
        style={{
          marginLeft: 'auto',
          marginTop: 4,
          textAlign: 'right',
          width: 'fit-content',
        }}
        ref={currentRef}
      >
        {initial}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 12px 0;
`;

const StyledBackground = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.primary};
  border-radius: 9999px;
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledSlider = styled.div`
  position: relative;
  display: block;
  border-radius: 999px;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.primary}20;
  height: 5px;
  width: 100%;
`;

const StyledThumb = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 9999px;
  position: relative;
  top: -5px;
  // opacity: 0.5;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.primary};
  cursor: pointer;
`;

export default Slider;
