import React, { Suspense } from "react";
import MuiTypography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";
import ToolTip from "../Tooltip/Tooltip";
import { useTheme } from "@mui/material/styles";
export interface IiconProps {
  color?: string;
  style?: {
    height: number;
    width: number;
  };
}

export interface INavItemProps {
  Icon: React.ReactNode;
  name: any;
  path: any;
  navigation: any;
  expanded: boolean;
  onClick: any;
  active: boolean;
  LinkElement?: any;
  linkElementProps?: any;
}

export interface INavigationProps {
  navigation: any;
  expanded: boolean;
  onClick?: any;
  active?: boolean;
  getActiveItem?: any;
  LinkElement?: any;
  linkElementProps?: any;
}

const ExpandedBox = ({ active, Icon , name, expanded = true }: any) => {
  const theme = useTheme();
  return (
    <MuiBox
      component="span"
      sx={[
        {
          display: "flex",
          alignItems: "center",
          height: "56px",
          color: theme.palette.primary.main,
          padding: "0 16px",
          cursor: "pointer",
          textDecoration: "none !important",
          "&:hover": {
            backgroundColor: theme.palette.primary.contrastText,
          },
        },
        active && {
          color: "#ffffff",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
      ]}
    >
      <MuiBox
        component="span"
        sx={{
          marginRight: "16px",
          display: "flex",
          alignItems: "center",
          color: active ? "#fff" : theme.palette.primary.light,
        }}
      >
        {!!Icon && (
          Icon
        )}
      </MuiBox>

      {expanded && (
        <MuiTypography
          variant="h6"
          sx={{
            text: {
              marginLeft: "16px",
            },
          }}
          color="inherit"
        >
          {name} 
        </MuiTypography>
      )}
    </MuiBox>
  );
};

const NavItem = ({
  Icon,
  name,
  path,
  expanded,
  active,
  onClick,
  LinkElement = "a",
  linkElementProps = {
    style: {
      textDecoration: "none",
    },
  },
}: INavItemProps) => {
  const theme = useTheme();
  return (
    <LinkElement href={path} {...linkElementProps}>
      {expanded ? (
        <ExpandedBox active={active} name={name} Icon={Icon} />
      ) : (
        <>
           {/* <ExpandedBox
            active={active}
            name={name}
            expanded={false}
            Icon={Icon}
          />  */}
        <ToolTip title={name} color="dark" placement="top" size="small">
          <MuiBox
            component="span"
            sx={[
              {
                display: "flex",
                alignItems: "center",
                height: "56px",
                color: theme.palette.primary.main,
                padding: "0 16px",
                cursor: "pointer",
                textDecoration: "none !important",
                "&:hover": {
                  backgroundColor: theme.palette.primary.contrastText,
                },
              },
              active && {
                color: "#ffffff",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              },
            ]}
          >
            <MuiBox
              component="span"
              sx={{
                marginRight: '16px',
                display: "flex",
                alignItems: "center",
                color: active ? "#fff" : theme.palette.primary.light,
              }}
            >
              {Icon && (
                Icon
              )}
            </MuiBox>
          </MuiBox>
        </ToolTip>
        </>
      )}
    </LinkElement>
  );
};

const Navigation = ({
  navigation,
  expanded,
  onClick,
  getActiveItem = (navItem: any) => window.location.pathname === navItem.path,
  LinkElement,
  linkElementProps,
}: INavigationProps) => {
  return (
    <div>
      <Suspense fallback={<p>...loading</p>}>
        {navigation.map((navItem: any, index: number) => (
          <NavItem
            key={index}
            {...navItem}
            active={getActiveItem(navItem)}
            expanded={expanded}
            onClick={onClick}
            LinkElement={LinkElement}
            linkElementProps={linkElementProps}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default Navigation;
