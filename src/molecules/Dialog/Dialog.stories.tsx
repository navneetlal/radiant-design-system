import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textbox, Button } from "../../components";

import Dialog from ".";
import { Box } from "@mui/material";
export default {
  title: "Components/molecules/Dialog",
  component: Dialog,
  args: {
    open: true,
    setClose: () => console.log,
    children: (
      <Box sx={{ margin: "40px" }}>
        <Textbox
          label="Enter your GreytHr Password"
          size="small"
          width={430}
          placeholder="sonamGupta@143_bewafa"
        />
      </Box>
    ),
    width: "520px",
    height: 280,
  },
  argTypes: {
    open: {
      description: "If True PopUpDialog will be shown",
    },
    setClose: {
      description:
        "Handler function to be called when user clicks on the close button",
    },
    heading: {
      description: "Header Message to be displayed",
    },
    buttonAction: {
      description: "To Display buttons in the dialog's footer ",
    },
    width: {
      description:
        "You can pass the width dynamically according to your need. It can be in number or string",
    },
    height: {
      description:
        "You can pass the height dynamically according to your need. It can be in number or string",
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  heading: "This is dialog",
};

export const DialogAction = Template.bind({});

DialogAction.args = {
  heading: "Start Trip",
  buttonAction: (
    <>
      <Button text="Cancel" variant="outlined" color="primary" size="small" />
    </>
  ),
};
