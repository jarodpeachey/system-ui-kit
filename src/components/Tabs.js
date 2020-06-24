import React, { useState } from 'react';
import styled from 'styled-components';

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(children[0].props.name);

  return (
    <Wrapper>
      {children.map((child) => {
        let newProps = { ...child.props };
        newProps.active = selectedTab === child.props.name;

        return <Tab>{child}</Tab>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Tabs;
