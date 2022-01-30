import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from "../components/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    label: "Home",
    placeholder: "Address",
    width: 408,
  },
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
