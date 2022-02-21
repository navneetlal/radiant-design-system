import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from ".";

export default {
  title: "Components/Atoms/Header",
  component: Header,
  args: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Children = Template.bind({});
Children.args = {
  children: "HI there!! I am a wrapper Header Component",
};
