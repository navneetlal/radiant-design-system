import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Autocomplete from "../components/Autocomplete";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
  args: {
    label: "Select Chip",
    placeholder: "Choose",
    options: [
      { id: 1, name: "Siddhant" },
      { id: 2, name: "Kunal" },
      { id: 3, name: "Navneet" },
      { id: 4, name: "Harshitha" },
      { id: 5, name: "Vaibhav" },
      { id: 6, name: "Nikhil" },
    ],
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);


export const Small = Template.bind({});
Small.args = {
  size : 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size : 'medium'
};





