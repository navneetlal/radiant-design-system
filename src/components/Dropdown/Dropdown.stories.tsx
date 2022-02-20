import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from ".";
import  MuiTypography  from "@mui/material/Typography";
import AddIcon from "../../icons/AddIcon";

export default {
  title: "Components/Atoms/Dropdown",
  component: Dropdown,
  args: {
    label: "Enter Name",
    size: "small",
    placeholder: "Kunal",
    children: (
      <MuiTypography
        variant="body1"
        color="primary"
        onMouseDown={() => alert("hello world")}
      >
        <AddIcon />
        Add New Transporter
      </MuiTypography>
    ),
    
  },
  argTypes : {
    children : {
      control : false
    },
    options : {
      control : false
    },
    value : {
      control : false
    },
    onChange : {
      control : false
    },
    

  }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Size = Template.bind({});
Size.args = {
  size: "medium",
};


export const Alert = Template.bind({});
Alert.args = {
  alert: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Options = Template.bind({});
Options.args = {
  options: [
    { id: 0, name: "Text" },
    { id: 1, name: "Number" },
    
    { id: 3, name: "Text" },
    { id: 4, name: "Number" },
    
    { id: 5, name: "Text" },
    { id: 6, name: "Number" },
    
    { id: 7, name: "Text" },
    { id: 8, name: "Number" },
    
    { id: 9, name: "Text" },
    { id: 10, name: "Number" },
  ],
};
