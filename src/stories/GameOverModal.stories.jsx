import React from "react";

import GameOverModal from "../components/GameOverModal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  parameters: {
    layout: "centered",
  },
  title: "Example/GameOverModal",
  component: GameOverModal,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GameOverModal {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  isWinner: false,
};
 