import React, { lazy, Suspense } from "react";
import MuiTypography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ToolTip from "../Tooltip/Tooltip";
import { useTheme } from "@mui/material/styles";


export interface IMyIconProps {
  color?: string;
  style?: {
    height: number;
    width: number;
  };
}

export interface INavItemProps {
  icon: any;
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

const NavItem = ({
  icon,
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
  const MyIcon: any = React.useMemo(
    () => lazy(() => import(`../../icons/${icon}`)),
    [icon]
  );
  return (
    <LinkElement href={path} {...linkElementProps}>
      {expanded ? (
        <Box
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
          <Box
            component="span"
            sx={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
              color: active ? "#fff" : theme.palette.primary.light,
            }}
          >
            {MyIcon && (
              <MyIcon
                color="currentColor"
                style={{
                  height: 24,
                  width: 24,
                }}
                component="span"
              />
            )}
          </Box>

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
        </Box>
      ) : (
        <ToolTip title={name} color="dark" placement="top" size="small">
          <Box
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
            <Box
              component="span"
              sx={{
                marginRight: '16px',
                display: "flex",
                alignItems: "center",
                color: active ? "#fff" : theme.palette.primary.light,
              }}
            >
              {MyIcon && (
                <MyIcon
                  color="currentColor"
                  style={{
                    height: '24px',
                    width: '24px',
                  }}
                />
              )}
            </Box>
          </Box>
        </ToolTip>
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
