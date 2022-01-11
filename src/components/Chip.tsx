import MuiChip from "@mui/material/Chip";
import { useTheme } from "@emotion/react";


export interface IChipsProps {
  selected?: boolean;
  onDelete?: any;
  size?: "small" | "medium" | "large";
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
      //   deleteIcon={<ChipIcon />}
      sx={[
        {
          backgroundColor: selected
            ? //@ts-ignore
              theme.palette.primary.main
            : //@ts-ignore

              theme.palette.secondary?.contrastText,
          color: selected
            ? //@ts-ignore

              theme.palette?.blackAndWhite.light
            : //@ts-ignore

              theme.palette?.blackAndWhite.main,
          "&:focus": {
            backgroundColor: selected
              ? //@ts-ignore

                theme.palette.primary.main
              : //@ts-ignore

                theme.palette.secondary?.contrastText,
          },
          "&:hover": {
            backgroundColor: selected
              ? //@ts-ignore

                theme.palette.primary.dark
              : //@ts-ignore

                theme.palette?.primary[100],

            color: selected
              ? //@ts-ignore
                theme.palette?.blackAndWhite.light
              : //@ts-ignore

                theme.palette?.blackAndWhite.main,
            "& path": {
              fill: selected
                ? //@ts-ignore

                  theme.palette?.blackAndWhite.light
                : //@ts-ignore

                  theme.palette?.blackAndWhite.main,
            },
          },
        },
      ]}
      {...otherProps}
    />
  );
};

export default Chip;
