import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";
import Add from "../../icons/AddIcon";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: { controls: { exclude: [ 'inputAlert', 'inputSize' ,'fromTextbox','inputReq' ,'inputLabel' ] } },
  args: {
    text: "Button text is this",
    variant: "outlined",
  },
  argTypes: {
    children: {
      control: false
    },
    startIcon: {
      control: false
    },
    endIcon: {
      control: false
    },
    classes: {
      control: false
    },
    sx: {
      control: false
    },
    action: {
      control: false
    },
    LinkComponent: {
      control: false
    },
    onFocusVisible: {
      control: false
    },
    TouchRippleProps: {
      control: false
    },
    focusVisibleClassName: {
      control: false
    },
    // inputAlert: {
    //   type: 'boolean',
    //   control: 'boolean'
    // }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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

export const Disabled = Template.bind({});

Disabled.args = {
  disabled:true,
};

export const TextIcon = Template.bind({});

TextIcon.args = {
  startIcon:<Add />,
  variant : 'text'
};