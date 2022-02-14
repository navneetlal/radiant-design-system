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
  argTypes : {
    children : {
      control : false
    },
    classes : {
      control : false
    },
    sx : {
      control : false
    },
    anchorOrigin : {
      control : false
    },
    components : {
      control : false
    },
    componentsProps : {
      control : false
    },


  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};
export const Invisible = Template.bind({});
Invisible.args = {
  invisible: true,
};
export const Children = Template.bind({});
Children.args = {
  children: <Button variant="outlined" color="success">Button</Button>,
  rounded: true,
};
