import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "../components/Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  args: {
    label: " I am Radio forever",
    size: "medium",
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Alert = Template.bind({});
Alert.args = {
  alert: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
