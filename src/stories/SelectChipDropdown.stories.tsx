import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectChipDropdown from "../components/SelectChipDropdown";

export default {
  title: "Components/Atoms/SelectChipDropdown",
  component: SelectChipDropdown,
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
} as ComponentMeta<typeof SelectChipDropdown>;

const Template: ComponentStory<typeof SelectChipDropdown> = (args) => (
  <SelectChipDropdown {...args} />
);


export const Default = Template.bind({});
Default.args = {
  //selectedOptions : {id: 1, name: "Siddhant"}
};



