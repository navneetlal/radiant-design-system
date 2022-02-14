import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Snackbar from "../components/Snackbar";

export default {
  title: "Components/Atoms/Snackbar",
  component: Snackbar,
  args: {
    message: "I am Snackbar",
    action: "Click",
    open: true,
  },
  argTypes: {
    ref: {
      control: false,
    },
    message: {
      type: "string",
      description: "The message to be displayed",
    },
    action: {
      description:
        "The action to display. It renders after the message, at the end of the snackbar.",
    },
    open: {
      description: "If true snackbar will appear",
    },
    anchorOrigin: {
      description:
        "The anchor of the Snackbar On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored.",
      defaultValue: {vertical: 'bottom', horizontal: 'left'},
    },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: "A",
};
