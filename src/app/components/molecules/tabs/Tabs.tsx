import React, { useState } from 'react';
import TabButtons from '../../atoms/TabButtons/TabButtons';

const Tabs = (props): JSX.Element => {
  let content;
  const buttons = [];
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const changeTab = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      {React.Children.map(props.children, (child: any) => {
        buttons.push(child.props.label);
        if (child.props.label === activeTab) content = child.props.children;
      })}
      <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
      <div className="tab-content">{content}</div>
    </>
  );
};

export default Tabs;
