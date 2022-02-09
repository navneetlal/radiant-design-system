import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";

import Badge from "../components/Badge";

export default {
  title: "Components/Atoms/Badge",
  component: Badge,
  args: {
    badgeContent : '5',
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
  children: <Button variant="outlined" color="success">Button</Button>,
  rounded: true,
};
