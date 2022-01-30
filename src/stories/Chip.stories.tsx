import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "../components/Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  args: {
    text: "Chip",
    size: "medium",
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const OnDelete = Template.bind({});
OnDelete.args = {
  onDelete: () => alert("deleted"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
