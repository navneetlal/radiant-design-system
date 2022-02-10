import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "../components/PersistentDrawer/Layout";

export default {
  title: "Components/Molecules/Layout",
  component: Layout,
  args: {
    brandURL:
      "http://app.tms.intugine.s3-website.ap-south-1.amazonaws.com/Intugine.png",
    callToActionButton: true,
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout />;

export const Default = Template.bind({});

Default.args = {};
