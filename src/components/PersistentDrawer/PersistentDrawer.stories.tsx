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
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/",
    },
    {
      name: "Track & Trace",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/settings",
    },
    {
      name: "Help",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
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
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/",
    },
    {
      name: "Track & Trace",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/settings",
    },
    {
      name: "Help",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
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
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/",
    },
    {
      name: "Track & Trace",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/tnt/trips",
    },
    {
      name: "Reports",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/reports",
    },
  ],
  bottomNavigation: [
    {
      name: "Settings",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/settings",
    },
    {
      name: "Help",
      Icon: <ArrowLeftIcon sx = {{color : '#000000'}}/>,
      path: "/help",
    },
  ],
};
