import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HelpIcon from "@mui/icons-material/Help";

import TrendCounter from "../molecules/TrendCounter";
export default {
  title: "Components/Molecules/TrendCounter",
  component: TrendCounter,
  args: {
      label : 'Tracked Consignments',
      number : 1000,
      
  },
  argTypes : {
    label : {
      description : 'Top Label'
    },
    number : {
      description : 'Number to be displayed'
    },
    changeColor : {
      description : 'Color of the Icon'
    },
    changeDirection : {
      description : 'Direction of the arrow `"top" "bottom"`'
    },
    Icon : {
      control : false,
      description : 'Icon to be displayed at the top right'
    },
    infoMessage : {
      description : 'Tooltip message when hovered on the icon'
    },
    changeValue : {
      description : 'Change Number'
    }
  }
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
