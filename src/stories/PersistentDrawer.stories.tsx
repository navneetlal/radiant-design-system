import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  ArrowLeft  from "../icons/ArrowLeft";
import PersistentDrawer from "../components/PersistentDrawer";

export default {
  title: "Components/Molecules/PersistentDrawer",
  component: PersistentDrawer,
  args: {
    brandURL:
      "http://app.tms.intugine.s3-website.ap-south-1.amazonaws.com/Intugine.png",
    callToActionButton: true,
    callToActionButtonProps: {
      variant: "contained",
      color: "success",
      size: "medium",
      text: "Add New Trip",
    },
  },
} as ComponentMeta<typeof PersistentDrawer>;

const Template: ComponentStory<typeof PersistentDrawer> = (args) => (
  <PersistentDrawer {...args} />
);

export const Navigation = Template.bind({});
Navigation.args = {
  topNavigation: [
    {
      name: "Dashboard",
      icon: <ArrowLeft />,
      path: "/",
    },
    {
      name: "Track & Trace",
      icon: <ArrowLeft />,
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      icon: <ArrowLeft />,
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      icon: <ArrowLeft />,
      path: "/settings",
    },
    {
      name: "Help",
      icon: <ArrowLeft />,
      path: "/help",
    },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  expanded: false,
  topNavigation: [
    {
      name: "Dashboard",
      icon: "ArrowLeft",
      path: "/",
    },
    {
      name: "Track & Trace",
      icon: "ArrowLeft",
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      icon: "ArrowLeft",
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      icon: "ArrowLeft",
      path: "/settings",
    },
    {
      name: "Help",
      icon: "ArrowLeft",
      path: "/help",
    },
  ],
};

// const [open, setOpen] = useState(false);
export const Toggle = Template.bind({});

Toggle.args = {
  //   expanded: open,
  //   onToggleIconClick: () => setOpen(!open),
  topNavigation: [
    {
      name: "Dashboard",
      icon: "ArrowLeft",
      path: "/",
    },
    {
      name: "Track & Trace",
      icon: "ArrowLeft",
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      icon: "ArrowLeft",
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      icon: "ArrowLeft",
      path: "/settings",
    },
    {
      name: "Help",
      icon: "ArrowLeft",
      path: "/help",
    },
  ],
};
