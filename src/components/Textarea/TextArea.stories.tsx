import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from ".";

export default {
  title: "Components/Atoms/Textarea",
  component: Textarea,
  args: {
    label: "Home",
    placeholder: "Address",
    width: 408,
  },
  argTypes : {
    label : {
      description : 'Input Label',
      type : "string"
    },
    placeholder : {
      description : 'Input Placeholder',
      type : "string"
    },
    width : {
      description : 'Custom Width',
      type : 'number'
    },
    value : {
      description : 'Input Value',
      type : 'string'
    }

  }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Value = Template.bind({});
Value.args = {
  value: "With Love from KP",
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
