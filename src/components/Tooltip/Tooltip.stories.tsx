import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from ".";

export default {
  title: "Components/Atoms/Tooltip",
  parameters: { controls: { exclude: [ 'ref' ] } },
  
  component: Tooltip,
  args: {
    title: "I am tooltip",
    size: "small",
    placement : 'top',
    children :  <span style={{marginTop : '20rem'}}>This is a tooltip</span>
  },
  argTypes : {
    children : {
      control : false,
      description : 'Tooltip Element',
    },
    placement : {
      description : 'Tooltip Placement `"top" "bottom"`'
    },
    color : {
      description : 'Tooltip Color'
    },
    title : {
      description : 'Message to be appeared on the tooltip'
    }
  }
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);



export const Color = Template.bind({});
Color.args = {
  color: "dark",
};
export const Light = Template.bind({});
Light.args = {
  color: "light",
};
