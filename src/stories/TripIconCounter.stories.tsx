import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TripIconCounter from "../molecules/TripIconCounter";
import CompletedTruckIcon from "../icons/CompletedTruckIcon";
export default {
  title: "Components/TripIconCounter",
  component: TripIconCounter,
  args: {
      number : 10,
      status : 'Trips Created',
  },
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
    icon : <CompletedTruckIcon color="#2C63E5"/>
}