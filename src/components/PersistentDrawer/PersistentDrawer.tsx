import React from "react";
import MuiIconButton from "@mui/material/IconButton";
import MuiTypography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import Button from "../Button/Button";
import { IButtonProps } from "../Button/Button";
import ToolTip from "../Tooltip/Tooltip";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Navigation from "./Navigation";
import { INavigationProps } from "./Navigation";
import AddIcon from "../../icons/AddIcon/AddIcon";

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
    ExpandIcon = ChevronRightIcon,
    CollapseIcon = ChevronLeftIcon,
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
    <MuiBox
      sx={{
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 1,
        minWidth: expanded ? width : "50px",
        maxWidth: expanded ? width : "50px",
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
      <MuiBox
        sx={{
          height: "calc(100% - 56px)",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MuiBox
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            minHeight: "64px",
            maxHeight: "64px",
            boxSizing: "border-box",
            borderBottom: `1px solid ${theme.palette.primary[200]}`,
          }}
        >
          <MuiIconButton color="primary" onClick={onToggleIconClick}>
            {expanded ? <CollapseIcon /> : <ExpandIcon />}
          </MuiIconButton>
          {expanded && (
            <MuiBox
              sx={{
                height: "64px",
                width: "calc(100% - 64px)",
                textAlign: "center",
              }}
            >
              <img alt="brand logo" style={{ height: "75%" }} src={brandURL} />
            </MuiBox>
          )}
        </MuiBox>
        {callToActionButton && (
          <MuiBox
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
                  <AddIcon fillColor={theme.palette.primary.light} />
                </MuiIconButton>
              </ToolTip>
            )}
          </MuiBox>
        )}
        <MuiBox
          sx={{
            height: "calc(100% - 154px)",
            overflow: "auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
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
              background: theme.palette.primary.dark,
              borderRadius: "4px",
            },
          }}
        >
          <MuiBox style={{ flexGrow: 1 }}>
            <Navigation
              navigation={topNavigation}
              expanded={expanded}
              {...navigationProps}
              //   onClick={() => setSettingsNav(!settingsNav)}
            />
          </MuiBox>

          {expanded && (
            <MuiBox
              sx={{
                margin: "2px 24px",
                padding: "16px",
                backgroundColor: theme.palette.primary.contrastText,
                "&> *": {
                  margin: "8px 0 !important",
                  textDecoration: "none",
                },
              }}
            >
              <MuiTypography variant="h4">{announcement.title}</MuiTypography>
              <MuiTypography variant="body1" color="textSecondary">
                {announcement.content}
              </MuiTypography>
              <a
                target="_blank"
                href="https://www.intugine.com/"
                rel="noreferrer"
              >
                <Button {...announcement.action} />
              </a>
            </MuiBox>
          )}
          <MuiBox
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
          </MuiBox>
        </MuiBox>
      </MuiBox>
      <MuiBox
        sx={{
          width: "100%",
          maxHeight: "56px",
          minHeight: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        <img
          src={footer.brandLogo}
          style={{ width: "40px", height: "40px" }}
          alt="footer-brandLogo"
        />
        {expanded && (
          <MuiTypography variant="body2">{footer.tagLine}</MuiTypography>
        )}
      </MuiBox>
    </MuiBox>
  );
};

export default PersistentDrawer;
