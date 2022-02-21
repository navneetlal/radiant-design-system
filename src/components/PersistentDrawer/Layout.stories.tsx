import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";

export default {
  title: "Components/Molecules/Layout",
  component: Layout,
  args: {
    brandURL:
      "http://app.tms.intugine.s3-website.ap-south-1.amazonaws.com/Intugine.png",
    callToActionButton: true,
  },
  argTypes : {
    brandURL : {
      control : false
    }
  }
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout />;

export const Default = Template.bind({});

Default.args = {};
