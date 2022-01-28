import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Breadcrumb from "../components/Breadcrumbs";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  args: {
    text: "TMS",
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Links = Template.bind({});
Links.args = {
  links: [
    {
      name: "Delhi",
      url: "https://www.figma.com/file/v8m3AEgxYahOv0s5oGbTXm/Intugine-Product-Design-Library-v1.6?node-id=0%3A22012",
    },
    {
      name: "Goa",
      url: "https://www.figma.com/file/v8m3AEgxYahOv0s5oGbTXm/Intugine-Product-Design-Library-v1.6?node-id=0%3A22012",
    },
  ],
};
