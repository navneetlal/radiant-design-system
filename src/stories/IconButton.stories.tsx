import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Close from "@mui/icons-material/Close";

import IconButton from "../components/IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    variant: "outlined",
    size: "small",
    startIcon: <Close />,
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
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
