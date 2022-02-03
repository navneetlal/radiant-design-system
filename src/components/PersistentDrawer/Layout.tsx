import React, { useState } from "react";
import PersistentDrawer, { IPersistentDrawer } from "./PersistentDrawer";
import Header from "./Header";
import { makeStyles } from "@mui/styles";

const sidenavProps: IPersistentDrawer = {
  brandURL:
    "http://app.tms.intugine.s3-website.ap-south-1.amazonaws.com/Intugine.png",
  callToActionButton: false,
  callToActionButtonProps: {
    text: "Add New",
  },
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

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    height: "100vh",
  },
  contentArea: {
    position: "relative",
    overflow: "hidden ",
    height: "auto",
    backgroundColor: "#ffffff",
    width: "100%",
    flexGrow: 1,
  },
  content: {
    height: "calc(100vh - 65px)",
  },
  sideNav: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    height: "100%",
  },
  navDisplay: {
    left: 0,
  },
  navHide: {
    left: -500,
  },
  navSettingsDisplay: {
    left: 0,
  },
  navSettingsHide: {
    left: -500,
  },
  contentBody: {
    height: "100%",
    overflow: "auto",
  },
}));
const Layout = ({ children }: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.layout}>
      <div>
        <PersistentDrawer
          expanded={open}
          onToggleIconClick={() => setOpen(!open)}
          {...sidenavProps}
        />
      </div>

      <div className={classes.contentArea}>
        <Header
          expanded={open}
          brandURL="http://app.tms.intugine.s3-website.ap-south-1.amazonaws.com/Intugine.png"
        />

        <div className={classes.content}>
          <div className={classes.contentBody}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
