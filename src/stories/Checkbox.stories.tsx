import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../components/Checkbox";

export default {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
  args: {
    label: "Checkbox",
    size: "medium",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  //checked: true,
  defaultChecked : true
};

export const Alert = Template.bind({});
Alert.args = {
  alert: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
