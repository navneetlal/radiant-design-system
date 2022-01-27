import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "../components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    label: "Enter Name",
    size: "small",
    placeholder: "Kunal",
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Size = Template.bind({});
Size.args = {
  size: "medium",
};

export const Width = Template.bind({});
Width.args = {
  width: 250,
};

export const Alert = Template.bind({});
Alert.args = {
  alert: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Options = Template.bind({});
Options.args = {
  options: [
    { id: 0, name: "Text" },
    { id: 1, name: "Number" },
  ],
};