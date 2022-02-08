import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HelpIcon from "@mui/icons-material/Help";

import Dialog from "../molecules/Dialog";
export default {
  title: "Components/Molecules/Dialog",
  component: Dialog,
  args: {
      open : true,
      setClose : () => console.log,
      message : 'This is a Dialog'

      
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args} />
);



 export const Primary = Template.bind({});

Primary.args = {
  headerMessage : 'Customized header message'
};

