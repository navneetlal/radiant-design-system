import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";

import Badge from "../components/Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  args: {
    text: "10",
    size: "small",
    color: "primary",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};
export const Children = Template.bind({});
Children.args = {
  children: <Button text="close" variant="outlined" color="success" />,
  rounded: true,
};
