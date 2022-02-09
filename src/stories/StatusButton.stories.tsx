import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StatusButton from "../molecules/StatusButton";
export default {
  title: "Components/Molecules/StatusButton",
  component: StatusButton,
  args: {
    number: 0,
    text: "Halted",
  },
} as ComponentMeta<typeof StatusButton>;

const Template: ComponentStory<typeof StatusButton> = (args) => (
  <StatusButton {...args} />
);

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

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
