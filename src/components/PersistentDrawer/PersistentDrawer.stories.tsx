import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  ArrowLeftIcon  from "../../icons/ArrowLeftIcon";
import PersistentDrawer from ".";

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
  argTypes : {
    brandURL : {
      control : false
    },
    callToActionButtonProps : {
      control : false
    },
    topNavigation : {
      control : false
    },
    bottomNavigation : {
      control : false
    },
    callToActionButtonCollapseProps : {
      control : false
    },
    ExpandIcon : {
      control : false
    },
    CollapseIcon : {
      control : false
    },
    onToggleIconClick : {
      control : false
    },
    navigationProps : {
      control : false
    }
  }
} as ComponentMeta<typeof PersistentDrawer>;

const Template: ComponentStory<typeof PersistentDrawer> = (args) => (
  <PersistentDrawer {...args} />
);

export const Navigation = Template.bind({});
Navigation.args = {
  topNavigation: [
    {
      name: "Dashboard",
      icon: <ArrowLeftIcon />,
      path: "/",
    },
    {
      name: "Track & Trace",
      icon: <ArrowLeftIcon />,
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      icon: <ArrowLeftIcon />,
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      icon: <ArrowLeftIcon />,
      path: "/settings",
    },
    {
      name: "Help",
      icon: <ArrowLeftIcon />,
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
      icon: <ArrowLeftIcon />,
      path: "/",
    },
    {
      name: "Track & Trace",
      icon: <ArrowLeftIcon />,
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      icon: <ArrowLeftIcon />,
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      icon: <ArrowLeftIcon />,
      path: "/settings",
    },
    {
      name: "Help",
      icon: <ArrowLeftIcon />,
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
      icon: <ArrowLeftIcon />,
      path: "/",
    },
    {
      name: "Track & Trace",
      icon: <ArrowLeftIcon />,
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      icon: <ArrowLeftIcon />,
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      icon: <ArrowLeftIcon />,
      path: "/settings",
    },
    {
      name: "Help",
      icon: <ArrowLeftIcon />,
      path: "/help",
    },
  ],
};
