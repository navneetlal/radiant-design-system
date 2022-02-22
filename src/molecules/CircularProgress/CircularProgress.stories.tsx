import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CircularProgress from ".";
export default {
  title: "Components/Molecules/CircularProgress",
  parameters: { controls: { exclude: [ 'ref' ] } },
  
  component: CircularProgress,
  args: {
      label : 'Consignment Delivered Vs POD Uploaded',
      value : 10
  },
  argTypes : {
    label : {
      description : 'Label to be appeared on the top'
    },
    value : {
      description : 'Progress Value'
    },
    color : {
      description : 'Color  of the Progress `"primary" "secondary" "success" "warning" "error"`',
      control : false
    }
  }
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);



 export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: "secondary",
};

export const Success = Template.bind({});

Success.args = {
  color: "success",
};

export const Warning = Template.bind({});

Warning.args = {
  color: "warning",
};

export const Error = Template.bind({});

Error.args = {
  color: "error",
};
