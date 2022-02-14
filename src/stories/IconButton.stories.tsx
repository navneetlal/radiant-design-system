import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Close from "@mui/icons-material/Close";

import IconButton from "../components/IconButton";

export default {
  title: "Components/Atoms/IconButton",
  
  component: IconButton,
  args: {
    variant: "outlined",
    size: "small",
    startIcon: <Close />,
  },
  argTypes : {
    startIcon : {
      control : false
    },
    color : {
      description : 'The color of the component. It supports those theme colors that make sense for this component.',
      defaultValue : `primary`,
      control : false
    },
    size : {
      description : 'Size of the component, `"small"`  `"medium"`  `"large"` '
    },
    variant : {
      description : 'Variant of the Button , `"outlined"` `"contained"` '
    }

  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
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
