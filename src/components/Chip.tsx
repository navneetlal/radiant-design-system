import MuiChip from "@mui/material/Chip";
import { useTheme } from "@mui/material";
import ChipIcon from "./icons/ChipIcon";
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
          
          backgroundColor: selected
            ? theme.palette.primary.main
            : theme.palette.secondary?.contrastText,
          color: selected ? "#fff" : "#1A1A1A",
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

            color: selected ? "#fff" : "#1A1A1A",
            "& path": {
              fill: selected ? "#fff" : "#1A1A1A",
            },
          },
        },
      ]}
      {...otherProps}
    />
  );
};

export default Chip;
