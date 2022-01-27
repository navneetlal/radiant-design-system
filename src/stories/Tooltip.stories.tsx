import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "../components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    title: "I am tooltip",
    size: "small",
    open: true,
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Placement = Template.bind({});
Placement.args = {
  placement: "bottom",
};

export const Color = Template.bind({});
Color.args = {
  color: "dark",
};
