import React, { useState } from "react";
import PersistentDrawer from "./PersistentDrawer";
import { IPersistentDrawer } from "./PersistentDrawer";
import Header from "./Header";
import Box from "@mui/material/Box";

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
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box>
        <PersistentDrawer
          expanded={open}
          onToggleIconClick={() => setOpen(!open)}
          {...sidenavProps}
        />
      </Box>

      <Box
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

        <Box sx={{ height: "calc(100vh - 65px)" }}>
          <Box sx={{ height: "100%", overflow: "auto" }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
