import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Column from './Column';

const Row = ({
  standardWidth,
  breakpoints,
  spacing,
  children,
  className,
  maxColumnSize = 2,
  demo,
  vertical,
  flexDirections,
  customStyles,
}) => {
  return (
    <Wrapper
      standardWidth={standardWidth}
      className={className || ''}
      breakpoint={breakpoints[0]}
      breakpointTwo={breakpoints[1] || breakpoints[0]}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === 'number' ? spacing[1] : spacing[0]}
      vertical={vertical}
      flexDirections={flexDirections || null}
      customStyles={customStyles}
    >
      {React.Children.toArray(children).map((item) => {
        return item ? (
          <>
            {item.props && item.props.noGrid ? (
              <>{item}</>
            ) : (
              <Column
                demo={demo}
                maxColumnSize={maxColumnSize}
                key='column'
                breakpoints={breakpoints}
                spacingX={spacing[0]}
                spacingY={
                  typeof spacing[1] === 'number' ? spacing[1] : spacing[0]
                }
                widths={item.props.widths}
              >
                {item}
              </Column>
            )}
          </>
        ) : null;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `};
  margin: -${(props) => props.spacingY}px -${(props) => props.spacingX}px -${(
      props
    ) => props.spacingY}px -${(props) => props.spacingX}px;
  width: ${(props) =>
    props.standardWidth ? '100%' : `calc(100% + ${props.spacingX * 2}px)`};
  @media (min-width: ${(props) => props.breakpoint}px) {
    flex-direction: ${(props) =>
      props.flexDirections ? props.flexDirections[0] || 'row' : 'row'};
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${(props) =>
      props.standardWidth
        ? '0'
        : `-${props.spacingY}px -${props.spacingX}px -${props.spacingY}px -${props.spacingX}px`};
  }
  ${(props) =>
    props.flexDirections &&
    props.flexDirections[1] &&
    css`
  @media (min-width: ${props.breakpointTwo}px) {
    flex-direction: ${
      props.flexDirections ? props.flexDirections[1] || 'row' : 'row'
    };
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${
      props.standardWidth
        ? '0'
        : `-${props.spacingY}px -${props.spacingX}px -${props.spacingY}px -${props.spacingX}px`
    };
  `};
`;

Row.propTypes = {
  breakpoint: PropTypes.number,
  spacing: PropTypes.number,
};

Row.defaultProps = {
  breakpoint: 769,
  spacing: 8,
};

export default Row;
