import React, { useState } from "react";

import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";

import { useTheme } from "@mui/material/styles";
import type { TabsProps } from "@mui/material/Tabs";
import { Box } from "@mui/material";

export interface ITabProps extends TabsProps {
  tabs: any[];

  width ?: number;
  onTabChange?: any;
  initialTabValue?: number;
  disabled?: boolean;
  [key: string]: any;
}
const Tabs = ({
  tabs,
  width = 100,
  onTabChange,
  initialTabValue = 0,
  disabled = false,
  ...otherProps
}: ITabProps) => {
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
  }, [value, onTabChange]);
  return (
    <Box sx={{ borderColor: "divider", width : `${width}%`}}>
      <MuiTabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: `${
              !disabled ? theme.palette.primary.main : theme.palette.grey[350]
            }`,
            
          },
        }}
        {...otherProps}
      >
        {tabs.map((item: any) => (
          <MuiTab
          {...otherProps}
            disabled={disabled}
            {...item}
            sx={{
              color: theme.palette.common.black,
              borderBottom: `1px solid ${theme.palette.grey[350]}`,
    
              textTransform: "none",
              ...theme.typography.h5,
              width : `${width}%`,
              "&&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          />
        ))}
      </MuiTabs>
    </Box>
  );
};

export default Tabs;
