import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";
import { Error } from "@mui/icons-material";

import Badge from "../components/Badge";

export default {
  title: "Components/Atoms/Badge",
  component: Badge,
  args: {
    badgeContent : '5',
    size: "medium",
    color: "warning",
    overlap : 'circular'
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
  children: <Error sx = {{width : '32px' , height : '32px'}}/>,
  rounded: true,
};
