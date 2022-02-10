import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Button from "../Button/Button";
import { IButtonProps } from "../Button/Button";
import ToolTip from "../Tooltip/Tooltip";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Navigation from "./Navigation";
import { INavigationProps } from "./Navigation";

export interface IExpandableNavigation {
  name: string;
  path: string;
  icon: string;
  children?: {
    name: string;
    path: string;
  }[];
}

export interface IAnnouncement {
  title: string;
  content: string;
  action: IButtonProps;
}

export interface INavigation {
  name: string;
  path: string;
  icon: string;
}

export interface IFooter {
  tagLine: string;
  brandLogo: string;
}

export interface IPersistentDrawer {
  expanded?: boolean;
  width?: number;
  brandURL?: string;
  callToActionButton?: boolean;
  callToActionButtonProps?: IButtonProps;
  callToActionButtonCollapseProps?: IButtonProps;
  topNavigation?: any;
  bottomNavigation?: any;
  ExpandIcon?: any;
  CollapseIcon?: any;
  onToggleIconClick?: any;
  navigationProps?: INavigationProps;
}

const PersistentDrawer = (props: IPersistentDrawer) => {
  const {
    width = 260,
    expanded = true,
    brandURL,
    callToActionButton,
    callToActionButtonProps,
    callToActionButtonCollapseProps,
    topNavigation = [],
    bottomNavigation = [],
    ExpandIcon = ChevronRight,
    CollapseIcon = ChevronLeft,
    onToggleIconClick,
    navigationProps,
  } = props;

  const announcement: IAnnouncement = {
    title: "Learn more about our services",
    content:
      "We offer a bunch of products to help improve your logistics supply chain",
    action: {
      text: "Learn More",
      variant: "outlined",
      size: "small",
    },
  };

  const footer: IFooter = {
    tagLine: "Powered by Intugine",
    // brandLogo: "/Intugine.png",
    brandLogo:
      "http://app.tms.intugine.s3-website.ap-south-1.amazonaws.com/Intugine.png",
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 1,
        minWidth: expanded ? width : 50,
        maxWidth: expanded ? width : 50,
        backgroundColor: theme.palette.common.white,
        maxHeight: "100vh",
        minHeight: "100vh",
        height: "100vh",
        boxShadow: "0px 24px 40px rgb(26 26 26 / 16%)",
        transition: "all 0.1s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          height: "calc(100% - 56px)",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            minHeight: 64,
            maxHeight: 64,
            borderBottom: `1px solid ${theme.palette.primary[200]}`,
          }}
        >
          <MuiIconButton color="primary" onClick={onToggleIconClick}>
            {expanded ? <CollapseIcon /> : <ExpandIcon />}
          </MuiIconButton>
          {expanded && (
            <Box
              sx={{
                height: "64px",
                width: "calc(100% - 64px)",
                textAlign: "center",
              }}
            >
              <img alt="brand logo" style={{ height: "75%" }} src={brandURL} />
            </Box>
          )}
        </Box>
        {callToActionButton && (
          <Box
            sx={{
              minHeight: "88px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: `1px solid ${theme.palette.primary["200"]}`,
            }}
          >
            {expanded ? (
              <Button {...callToActionButtonProps} />
            ) : (
              <ToolTip title="Add New Trip" color="dark" size="small">
                <MuiIconButton {...callToActionButtonCollapseProps}>
                  {/* <AddIcon  /> */}
                </MuiIconButton>
              </ToolTip>
            )}
          </Box>
        )}
        <Box
          sx={{
            height: "calc(100% - 154px)",
            overflow: "auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            "&::-webkit-scrollbar": {
              width: 6,
              height: 6,
              position: "absolute",
            },
            "&::-webkit-scrollbar-track": {
              background: " #f5f8ff",
              position: "absolute",
            },
            "&::-webkit-scrollbar-track-piece": {
              background: "transparent",
            },

            "&::-webkit-scrollbar-thumb": {
              background: " #264ca4",
              borderRadius: 4,
            },
          }}
        >
          <Box style={{ flexGrow: 1 }}>
            <Navigation
              navigation={topNavigation}
              expanded={expanded}
              {...navigationProps}
              //   onClick={() => setSettingsNav(!settingsNav)}
            />
          </Box>

          {expanded && (
            <Box
              sx={{
                margin: "2px 24px",
                padding: "16px",
                backgroundColor: theme.palette.primary.contrastText,
                "&> *": {
                  margin: "8px 0",
                  textDecoration: "none",
                },
              }}
            >
              <Typography variant="h4">{announcement.title}</Typography>
              <Typography variant="body1" color="textSecondary">
                {announcement.content}
              </Typography>
              <a target="_blank" href="https://www.intugine.com/" rel="noreferrer">
                <Button {...announcement.action} />
              </a>
            </Box>
          )}
          <Box
            sx={{
              height: "144px",
              borderBottom: "1px solid #bfd2fd",
            }}
          >
            <Navigation
              navigation={bottomNavigation}
              expanded={expanded}
              {...navigationProps}
              //   onClick={() => setSettingsNav(!settingsNav)}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxHeight: 56,
          minHeight: 56,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        <img src={footer.brandLogo} style={{ width: 40, height: 40 }} alt= "footer-brandLogo" />
        {expanded && <Typography variant="body2">{footer.tagLine}</Typography>}
      </Box>
    </Box>
  );
};

export default PersistentDrawer;
