import React, { useState } from "react";

import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs'

import { useTheme } from "@mui/material/styles";
import type { TabsProps } from '@mui/material/Tabs'

export interface ITabProps extends TabsProps {
  tabs: any[];
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
          backgroundColor: `${!disabled
            ? theme.palette.primary.main
            : theme.palette.grey[350]
            }`,
        },
      }}
      {...otherProps}
    >
      {tabs.map((item: any) => (
        <MuiTab
          disabled={disabled}
          {...item}
          sx={{
            color: theme.palette.common.black,
            textTransform: "none",
            ...theme.typography.h5,
            maxWidth: "100%",
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
