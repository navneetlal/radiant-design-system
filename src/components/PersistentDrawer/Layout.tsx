import React, { useState } from "react";
import MuiBox from "@mui/material/Box";
import PersistentDrawer from "./PersistentDrawer";
import { IPersistentDrawer } from "./PersistentDrawer";
import Header from "./Header";

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

const Layout = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <MuiBox sx={{ display: "flex", height: "100vh" }}>
      <MuiBox>
        <PersistentDrawer
          expanded={open}
          onToggleIconClick={() => setOpen(!open)}
          {...sidenavProps}
        />
      </MuiBox>

      <MuiBox
        sx={{
          position: "relative",
          overflow: "hidden ",
          height: "auto",
          backgroundColor: "#ffffff",
          width: "100%",
          flexGrow: 1,
        }}
      >
        <Header
          expanded={open}
          brandURL="http://app.tms.intugine.s3-website.ap-south-1.amazonaws.com/Intugine.png"
        />

        <MuiBox sx={{ height: "calc(100vh - 65px)" }}>
          <MuiBox sx={{ height: "100%", overflow: "auto" }}>{children}</MuiBox>
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
};

export default Layout;
