import React from "react";

import Card from "../components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  parameters: {
    layout: "centered",
  },
  title: "Example/Card",
  component: Card,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  number: 12,
  type: "heart",
  isFlipped:true
};

export const Secondary = Template.bind({})

Secondary.args = {
  number: 12,
  type: "heart",
  isFlipped:false
}

export const Sizes = (args) => {
  return <div className="flex gap-4">
    <div className="w-[300px]">
      <Card {...args} />
    </div>
    <div className="w-[200px]">
    <Card {...args} />
    </div>
    <div className="w-[100px]">
    <Card {...args} />
    </div>
    <div className="w-[50px]">
    <Card {...args} />
    </div>
  </div>
}