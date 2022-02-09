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
