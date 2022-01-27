import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Snackbar from "../components/Snackbar";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  args: {
    message: "I am Snackbar",
    action: "Click",
    open: true,
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: "A",
};
