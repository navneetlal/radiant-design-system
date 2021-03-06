import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TripIconCounter from ".";
import CompletedTruckIcon from "../../icons/CompletedTruckIcon";
export default {
  title: "Components/Molecules/TripIconCounter",
  component: TripIconCounter,
  args: {
      number : 10,
      status : 'Trips Created',
  },
  argTypes : {
    number : {
      description : 'Number to be Displayed'
    },
    status : {
      description : 'Text to be Displayed'
    },
    selected : {
      description : 'If true background color would be blue else white'
    },
    icon : {
      description : 'Icon to be displayed',
      control  : false
    }
  }
} as ComponentMeta<typeof TripIconCounter>;

const Template: ComponentStory<typeof TripIconCounter> = (args) => (
  <TripIconCounter {...args} />
);

export const Selected = Template.bind({});
Selected.args = {
  selected : true,
};

export const Icon = Template.bind({});

Icon.args = {
    icon : <CompletedTruckIcon fillColor="#2C63E5"/>
}