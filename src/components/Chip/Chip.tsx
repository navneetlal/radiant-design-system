import React from "react";
import MuiChip from "@mui/material/Chip";
import { useTheme } from "@mui/material";
import ChipIcon from "../../icons/Chip";
export interface IChipsProps {
  selected?: boolean;
  onDelete?: any;
  size: "small" | "medium";
  text: string;
  fromMultiSelect ?: boolean,
  [key: string]: any;
}

const Chip = ({
  selected,
  onDelete,
  size,
  fromMultiSelect = false,
  text,
  ...otherProps
}: IChipsProps) => {
  const theme = useTheme();
  return (
    <MuiChip
      label={text}
      onDelete={onDelete}
      size={size}
      deleteIcon={<ChipIcon />}
      sx={[
        {
          backgroundColor: selected
            ? theme.palette.primary.main
            : theme.palette.secondary?.contrastText,
          color: selected ? "#ffffff" : '#1A1A1A',
          ...(fromMultiSelect && {
            marginRight: '4px',
          }),
          "&:focus": {
            backgroundColor: selected
              ? theme.palette.primary.main
              : theme.palette.secondary?.contrastText,
          },
          "&:hover": {
            backgroundColor: selected
              ? ''
              : //@ts-ignore
                theme.palette?.primary[100],

            color: selected ? "#ffffff" : "#1A1A1A",
            "& path": {
              fill: selected ? "#ffffff" : "#1A1A1A",
            },
          },
        },
        otherProps.disabled && {
          backgroundColor: `${theme.palette.secondary.contrastText} !important`,
          opacity : `1 !important`,
          color : theme.palette.secondary.main
        },
      ]}
      {...otherProps}
    />
  );
};

export default Chip;
