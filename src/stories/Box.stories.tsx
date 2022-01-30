import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "../components/Box";

export default {
  title: "Components/Box",
  component: Box,
  args: {
    color: "primary",
    size: "medium",
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Children = Template.bind({});
Children.args = {
  children: "HI there!! I am a wrapper Header Component",
};
export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
  children: "HI there!! I am a wrapper Header Component",
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
  children: "HI there!! I am a wrapper Header Component",
};

export const Warning = Template.bind({});

Warning.args = {
  color: "warning",
  children: "HI there!! I am a wrapper Header Component",
};

export const Error = Template.bind({});

Error.args = {
  color: "error",
  children: "HI there!! I am a wrapper Header Component",
};
