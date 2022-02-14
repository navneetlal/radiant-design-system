import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "../components/Switch";

export default {
  title: "Components/Atoms/Switch",
  component: Switch,
  args: {
    label: "Switch",
    size: "medium",
  },
  argTypes : {
    action : {
      control : false
    },
    focusVisibleClassName : {
      control : false
    },
    LinkComponent: {
      control : false
    },
    onFocusVisible: {
      control : false
    },
    TouchRippleProps :{
      control : false
    },
    size : {
      description : 'Size of the Switch `small` `medium` '
    },
    checked :{
      description : 'If true switch would be checked'
    }

  }
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Colored = Template.bind({});
Colored.args = {
  colored: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
