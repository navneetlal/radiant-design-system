import React, { useState } from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material";
export interface ITABSPROPS {
  tabs: any;
  onTabChange?: any;
  initialTabValue: number;
  disabled?: boolean;
  [key: string]: any;
}
const Tabs = ({
  tabs,
  onTabChange,
  initialTabValue = 0,
  disabled = false,
  ...otherProps
}: ITABSPROPS) => {
  const theme = useTheme();
  const [value, setValue] = useState(initialTabValue);
  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(initialTabValue);
  }, [initialTabValue]);

  React.useEffect(() => {
    if (onTabChange) {
      onTabChange(value);
    }
  }, [value]);
  return (
    <MuiTabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: `${
            !disabled
              ? theme.palette.primary.main
              : //@ts-ignore
                theme.palette.secondary[300]
          }`,
        },
      }}
      {...otherProps}
    >
      {tabs.map((item: any) => (
        <Tab
          disabled={disabled}
          {...item}
          sx={{
            color: "#1A1A1A",
            textTransform: "none",

            ...theme.typography.h5,
            maxWidth: "100%",
            minWidth: "50%",
            "&&:hover": {
              color: theme.palette.primary.main,
            },
          }}
        />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
