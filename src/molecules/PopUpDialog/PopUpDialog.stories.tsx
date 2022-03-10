import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PopUpDialog from ".";
export default {
  title: "Components/molecules/PopUpDialog",
  component: PopUpDialog,
  args: {
    open: true,
    setClose: () => console.log,
    message: "This is a PopUpDialog",
  },
  argTypes: {
    open: {
      description: "If True PopUpDialog will be shown",
    },
    setClose: {
      description:
        "Handler function to be called when user clicks on the close button",
    },
    message: {
      description: "Main Message to be Displayed",
    },
    headerMessage: {
      description: "Header Message to be displayed",
    },
    onClickNo: {
      control: false,
      description:
        "Handler function to be called when the user clicks the no button",
    },
    onClickYes: {
      control: false,
      description:
        "Handler function to be called when the user clicks the Yes button",
    },
    confirmBtnColor: {
      description: "Color of the Confirm Button",
    },
    discardBtnColor: {
      description: "Color of the discard Button",
    },
    confirmBtnText: {
      description: "Confirm Button Text",
    },
    discardBtnText: {
      description: "Discard button text",
    },
  },
} as ComponentMeta<typeof PopUpDialog>;

const Template: ComponentStory<typeof PopUpDialog> = (args) => (
  <PopUpDialog {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  headerMessage: "Customized header message",
};
