import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectChipDropdown from ".";

export default {
  title: "Components/Atoms/SelectChipDropdown",
  component: SelectChipDropdown,
  args: {
    label: "Select Chip",
    placeholder: "Enter Data",
    width : 200,
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
    options : {
      control : false,
      description : 'Dropdown Options which should appear'
    },
    label : {
      description : 'Input Label'
    },
    placeholder : {
      description : 'Input Placeholder'
    },
    onChange : {
      description : 'OnChange handler'
    },
    width : {
      description : 'Custom Input Width'
    },
    alert : {
      type : 'boolean',
      description : 'If true border color will become red'
    },
    required : {
      type : 'boolean',
      
      description : 'Set true if input is compulsory'
    },
    disabled : {
      type : 'boolean',
      description : 'If true component would be disabled'
    },
    selectedOptions : {
      description : 'Options which are selected from dropdown'
    }
  }
} as ComponentMeta<typeof SelectChipDropdown>;

const Template: ComponentStory<typeof SelectChipDropdown> = (args) => (
  <SelectChipDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  //selectedOptions : {id: 1, name: "Siddhant"}
};
