import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HelpIcon from "@mui/icons-material/Help";

import TrendCounter from ".";
export default {
  title: "Components/Molecules/TrendCounter",
  component: TrendCounter,
  args: {
      label : 'Tracked Consignments',
      currentValue : 1000,
      
  },
  argTypes : {
    label : {
      description : 'Top Label'
    },
    currentValue : {
      description : 'Number to be displayed'
    },
    color : {
      description : 'Color of the Icon'
    },
    direction : {
      description : 'Direction of the arrow `"top" "bottom"`'
    },
    Icon : {
      control : false,
      description : 'Icon to be displayed at the top right'
    },
    infoMessage : {
      description : 'Tooltip message when hovered on the icon'
    },
    changeInPercent : {
      description : 'Change Number'
    }
  }
} as ComponentMeta<typeof TrendCounter>;

const Template: ComponentStory<typeof TrendCounter> = (args) => (
  <TrendCounter {...args} />
);



 export const Primary = Template.bind({});

Primary.args = {
  color : "primary"
};

export const Icon = Template.bind({});

Icon.args = {
    Icon : HelpIcon
}

export const Change = Template.bind({});


Change.args = {
    changeInPercent : 36,
      direction : "up",
      Icon : HelpIcon
}
