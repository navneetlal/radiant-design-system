import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textbox from ".";

export default {
  title: "Components/Atoms/Textbox",
  parameters: { controls: { exclude: [ 'ref' ] } },
  
  component: Textbox,
  args: {
    label: "Enter Name",
    size: "small",
    placeholder: "Kunal",
  },
  argTypes : {
    placeholder : {
      type : 'string',
      description : 'Input Placeholder'
    },
    action : {
      description : 'Element in this will be placed at the right end of Textbox',
      control : false,
    },
    
  }
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => (
  <Textbox {...args} />
);

export const Size = Template.bind({});
Size.args = {
  size: "medium",
};

export const Width = Template.bind({});
Width.args = {
  width: 250,
};

export const Value = Template.bind({});
Value.args = {
  value: "Kunal",
};

export const Alert = Template.bind({});
Alert.args = {
  alert: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Action = Template.bind({});
Action.args = {
  action: { text: "Action" },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  action: { text: "Add" },
};
