import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HelpIcon from "@mui/icons-material/Help";

import TrendCounter from "../molecules/TrendCounter";
export default {
  title: "Components/molecules/TrendCounter",
  component: TrendCounter,
  args: {
      label : 'Tracked Consignments',
      number : 1000,
      
  },
} as ComponentMeta<typeof TrendCounter>;

const Template: ComponentStory<typeof TrendCounter> = (args) => (
  <TrendCounter {...args} />
);



 export const Primary = Template.bind({});

Primary.args = {
  changeColor : "primary"
};

export const Icon = Template.bind({});

Icon.args = {
    Icon : HelpIcon
}

export const Change = Template.bind({});


Change.args = {
    changeValue : 36,
      changeDirection : "up",
      Icon : HelpIcon
}
