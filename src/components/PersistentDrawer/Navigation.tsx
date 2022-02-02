import React, { lazy, Suspense } from "react";
import { Typography as MuiTypography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ToolTip from "../Tooltip";

const useStyles = makeStyles((theme: any) => ({
  navItem: {
    display: "flex",
    alignItems: "center",
    height: 56,
    color: "#2c63e5",
    // color: theme.palette.primary.main,
    padding: "0 16px",
    cursor: "pointer",
    textDecoration: "none !important",
    "&:hover": {
      backgroundColor: "#f5f8ff",
      //   backgroundColor: theme.palette.primary.contrastText,
    },
  },
  icon: {
    marginRight: 16,
    display: "flex",
    alignItems: "center",
    color: ({ active }: any) => (active ? "#fff" : "#91b0fa"),
    // color: ({ active }: any) => (active ? "#fff" : theme.palette.primary.light),
  },
  text: {
    marginLeft: 16,
  },
  active: {
    // color: theme.palette.blackAndWhite.light,
    color: "#ffffff",
    backgroundColor: "#2c63e5",
    // backgroundColor: theme.palette.primary.main,
    "&:hover": {
      //   backgroundColor: theme.palette.primary.dark,
      backgroundColor: "#264ca4",
    },
  },
}));

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
  const MyIcon: any = React.useMemo(
    () => lazy(() => import(`../../icons/${icon}`)),
    [icon]
  );
  const classes = useStyles({ active });
  return (
    <LinkElement href={path} {...linkElementProps}>
      {expanded ? (
        <span className={`${classes.navItem} ${active && classes.active}`}>
          <span className={classes.icon}>
            {MyIcon && (
              <MyIcon
                color="currentColor"
                style={{
                  height: 24,
                  width: 24,
                }}
              />
            )}
          </span>

          <MuiTypography variant="h6" className={classes.text} color="inherit">
            {name}
          </MuiTypography>
        </span>
      ) : (
        <ToolTip title={name} color="dark" placement="top" size="small">
          <span className={`${classes.navItem} ${active && classes.active}`}>
            <span className={classes.icon}>
              {MyIcon && (
                <MyIcon
                  color="currentColor"
                  style={{
                    height: 24,
                    width: 24,
                  }}
                />
              )}
            </span>
          </span>
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
