import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "../components/Tabs";

export default {
  title: "Components/Atoms/Tabs",
  component: Tabs,
  args: {
    tabs: [
      {
        label: "Alerts",
      },
      {
        label: "Notifications",
      },
    ],
  },
  argTypes: {
    tabs: {
      control: false,
      description: "Tabs to be added",
    },
    onTabChange: {
      control: false,
      description: "Handler Function",
    },
    action: {
      control: false,
    },
    children: {
      control: false,
    },

    classes: {
      control: false,
    },
    ScrollButtonComponent: {
      control: false,
    },
    scrollButtons: {
      control: false,
    },
    TabIndicatorProps: {
      control: false,
    },
    TabScrollButtonProps: {
      control: false,
    },
    value: {
      control: false,
    },
    sx: {
      control: false,
    },
    LinkComponent: {
      control: false,
    },
    onFocusVisible: {
      control: false,
    },
    TouchRippleProps: {
      control: false,
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Tab = Template.bind({});
Tab.args = {
  tabs: [
    {
      label: "Intugine",
    },
    {
      label: "Technologies",
    },
    {
      label: "Koramangla",
    },
  ],
};

export const InitialTabValue = Template.bind({});
InitialTabValue.args = {
  initialTabValue: 0,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
