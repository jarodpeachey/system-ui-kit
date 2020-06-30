import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import Flex from './Flex';
import TabContent from './TabContent';
import TabList from './TabList';

const Tabs = ({
  children,
  className,
  id,
  onChange,
  defaultValue,
  customStyles,
  fullWidth,
  value,
  vertical,
}) => {
  const [selectedTab, setSelectedTab] = useState(
    value || defaultValue || children[0].props.children[0].props.name,
  );

  const customOnClick = (newValue) => {
    console.log('Custom onClick!');
    setSelectedTab(newValue);

    onChange(newValue);
  };

  useEffect(() => {
    console.log('Value is: ', value);
    setSelectedTab(value);
  }, [value]);

  return (
    <Wrapper className={className} id={id} customStyles={customStyles}>
      <Flex direction={vertical ? 'vertical' : 'horizontal'} hAlign="start">
        {children.map((child) => {
          console.log(child.type.name);
          let newProps = {
            ...child.props,
            onClick: customOnClick,
            selectedTab,
            fullWidth: fullWidth,
            vertical: vertical,
          };
          newProps.active = selectedTab === child.props.name;

          return <Tab {...newProps}>{child.props.children}</Tab>;
        })}
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props) => props.customStyles}
`;

export default Tabs;
