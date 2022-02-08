import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CircularProgress from "../molecules/CircularProgress";
export default {
  title: "Components/Molecules/CircularProgress",
  component: CircularProgress,
  args: {
      label : 'EPOD Delivered vs Not and Testing',
      value : 10
  },
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);



 export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
};

export const Warning = Template.bind({});

Warning.args = {
  color: "warning",
};

export const Error = Template.bind({});

Error.args = {
  color: "error",
};
