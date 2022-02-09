import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultiSelect from "../components/MultiSelect";

export default {
  title: "Components/Atoms/MultiSelect",
  component: MultiSelect,
  args: {
    label: "Add email addresses",
    required : true,
    placeholder: "Placeholder",
    name: "emails",
    width : 400
  },
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args) => (
  <MultiSelect {...args} />
);

export const Alert = Template.bind({});
Alert.args = {
  alert: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Options = Template.bind({});
Options.args = {
  options: ["Jiii"],
};
