import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dialog from ".";
export default {
  title: "Components/Molecules/Dialog",
  component: Dialog,
  args: {
      open : true,
      setClose : () => console.log,
      message : 'This is a Dialog'

      
  },
  argTypes : {
    open : {
      description : 'If True Dialog will be shown'
    },
    setClose : {
      description : 'Handler function to be called when user clicks on the close button'
    },
    message : {
      description : 'Main Message to be Displayed'
    },
    headerMessage : {
      description : 'Header Message to be displayed'
    },
    onClickNo : {
      control : false,
      description : 'Handler function to be called when the user clicks the no button'
    },
    onClickYes : {
      control :  false,
      description : 'Handler function to be called when the user clicks the Yes button'
    },
    confirmBtnColor : {
      description : 'Color of the Confirm Button'
    },
    discardBtnColor : {
      description : 'Color of the discard Button'
    },
    confirmBtnText : {
      description : 'Confirm Button Text'
    },
    discardBtnText : {
      description : 'Discard button text'
    }
  }
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args} />
);



 export const Primary = Template.bind({});

Primary.args = {
  headerMessage : 'Customized header message'
};

