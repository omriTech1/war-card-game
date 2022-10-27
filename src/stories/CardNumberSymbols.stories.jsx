import React from "react";

import { CardNumberSymbols } from "../components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Partials/Number",
  component: CardNumberSymbols,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardNumberSymbols {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  number: 1,
//   shape: "♥",
  width: 300
};