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
