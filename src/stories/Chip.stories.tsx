import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "../components/Chip";

export default {
  title: "Components/Atoms/Chip",
  component: Chip,
  parameters: { controls: { exclude: [ 'fromMultiSelect', 'fromSelectChip' ] } },
  args: {
    label: "Chip",
    size: "medium",
  },
  argTypes : {
    avatar : {
      control : false
    },
    children : {
      control : false
    },
    classes : {
      control : false
    },
    deleteIcon : {
      control : false
    },
    icon : {
      control : false
    },
    sx : {
      control : false
    },

  }
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
