import React, { Suspense } from "react";
import MuiTypography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
  Icon: React.FunctionComponent<any>;
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

const ExpandedBox = ({ active, Icon, name, expanded = true }: any) => {
  const theme = useTheme();
  return (
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
        {Icon && (
          <Icon
            color="currentColor"
            style={{
              height: 24,
              width: 24,
            }}
            component="span"
          />
        )}
      </Box>

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
    </Box>
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
  return (
    <LinkElement href={path} {...linkElementProps}>
      {expanded ? (
        <ExpandedBox active={active} name={name} Icon={Icon} />
      ) : (
        <ToolTip title={name} color="dark" placement="top" size="small">
          <ExpandedBox
            active={active}
            name={name}
            expanded={false}
            Icon={Icon}
          />
          {/* <Box
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
              {Icon && (
                <Icon
                  color="currentColor"
                  style={{
                    height: '24px',
                    width: '24px',
                  }}
                />
              )}
            </Box>
          </Box> */}
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
