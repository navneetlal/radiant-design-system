import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "../components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    title: "I am tooltip",
    size: "small",
    placement : 'top',
    children :  <span style={{marginTop : '20rem'}}>This is a tooltip</span>
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);



export const Color = Template.bind({});
Color.args = {
  color: "dark",
};
export const Light = Template.bind({});
Light.args = {
  color: "light",
};
