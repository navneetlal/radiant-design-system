import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../components/Input";

export default {
  title: "Components/Atoms/Input",
  component: Input,
  args: {
    placeholder: "Search",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Label = Template.bind({});
Label.args = {
  label: "hi",
};
