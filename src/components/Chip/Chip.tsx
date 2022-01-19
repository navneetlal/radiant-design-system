import React from 'react';
import MuiChip from "@mui/material/Chip";
import { useTheme } from "@mui/material";
import ChipIcon from "../../icons/Chip";
export interface IChipsProps {
  selected?: boolean;
  onDelete?: any;
  size: "small" | "medium";
  text: string;
  [key: string]: any;
}

const Chip = ({
  selected,
  onDelete,
  size,
  text,
  ...otherProps
}: IChipsProps) => {
  const theme = useTheme();
  return (
    <MuiChip
      color="primary"
      label={text}
      onDelete={onDelete}
      size={size}
      deleteIcon={<ChipIcon />}
      sx={[
        
        {
          
          backgroundColor: selected && !otherProps.disabled
            ? theme.palette.primary.main
            : theme.palette.secondary?.contrastText,
          color: selected && !otherProps.disabled ? "#ffffff" : "#1A1A1A",
          "&:focus": {
            backgroundColor: selected
              ? theme.palette.primary.main
              : theme.palette.secondary?.contrastText,
          },
          "&:hover": {
            backgroundColor: selected
              ? theme.palette.primary.dark
              : //@ts-ignore
                theme.palette?.primary[100],

            color: selected ? "#ffffff" : "#1A1A1A",
            "& path": {
              fill: selected ? "#ffffff" : "#1A1A1A",
            },
          },
        },
      ]}
      {...otherProps}
    />
  );
};

export default Chip;
