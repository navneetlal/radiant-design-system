import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Autocomplete from "../components/Autocomplete";
import { Typography } from "@mui/material";
import AddIcon from "../icons/AddIcon";

export default {
  title: "Components/Atoms/Autocomplete",
  component: Autocomplete,
  args: {
    label: "Select Chip",
    placeholder: "Choose",
    children: (
      <Typography
        variant="body1"
        color="primary"
        onMouseDown={() => alert("hello world")}
      >
        <AddIcon />
        Add New Transporter
      </Typography>
    ),
    options: [
      { id: 1, name: "Siddhant" },
      { id: 2, name: "Kunal" },
      { id: 3, name: "Navneet" },
      { id: 4, name: "Harshitha" },
      { id: 5, name: "Vaibhav" },
      { id: 6, name: "Nikhil" },
    ],
  },
  argTypes : {
      children : {
        control : false
      },
      options : {
        control : false
      },
      onChange : {
        control : false
      },
      onInputChange : {
        control : false
      }
  }
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
