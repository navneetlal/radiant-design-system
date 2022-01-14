import {
  Switch as MuiSwitch,
  Typography as MuiTypography,
} from "@mui/material";

import { useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import { Theme } from "@mui/material";
const styles = {
  small: {
    root: {
      width: 28,
      height: 16,
    },
    switchBase: {
      transform: 12,
    },
    thumb: {
      width: 12,
      height: 12,
    },
  },
  medium: {
    root: {
      width: 36,
      height: 20,
    },
    switchBase: {
      transform: 16,
    },
    thumb: {
      width: 16,
      height: 16,
    },
  },
} as const;


export interface ISwitchProps {
  checked?: any;
  onChange?: any;
  label?: string;
  name?: string;
  size?: "small" | "medium";
  disabled?: any;
  colored?: boolean;
  required?: boolean;
  [key: string]: any;
}

const Switch = ({
  checked,
  onChange,
  label,
  name,
  size = "medium",
  disabled,
  colored,
  required,
  ...otherProps
}: ISwitchProps) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={[
        {
          display: "flex",
          "&>p": {
            marginRight: "4px",
          },
        },
      ]}
    >
      {label ? (
        <MuiTypography variant={size === "small" ? "body2" : "body1"}>
          {label}
        </MuiTypography>
      ) : (
        ""
      )}

      <MuiSwitch
        checked={checked}
        onChange={onChange}
        name={name}
        size={size}
        disabled={disabled}
        
        sx={[
          {
            "& .MuiSwitch-root": {
              width: `${styles}.${size}.root.width !important`,
              height: `${styles}.${size}.root.height !important`,
              padding: 0,
              display: `flex !important`,
            },
          },
          {
            "& .Mui-disabled": {
              "& + $track": {
                backgroundColor: `${
                  theme.palette[colored ? "error" : "primary"].light
                }!important`,
                opacity: `${1}!important`,
              },
              color: `fff !important`,
              "&$checked": {
                "& + $track": {
                  opacity: 1,
                  backgroundColor: `${
                    theme.palette[colored ? "success" : "primary"].light
                  }!important`,
                  borderColor: `${
                    theme.palette[colored ? "success" : "primary"].light
                  }!important`,
                },
              },
            },
          },

          {
            "& .MuiSwitch-switchBase": {
              padding: 1,
              color: "white",
              "&$checked": {
                transform: `translateX(${
                  styles[size].switchBase.transform / 1
                }px) !important`,
                color: `white !important`,
                "& + $track": {
                  opacity: 1,
                  backgroundColor: `${
                    theme.palette[colored ? "success" : "primary"][
                      disabled ? "light" : "main"
                    ]
                  } !important`,
                  borderColor: `${
                    theme.palette[colored ? "success" : "primary"][
                      disabled ? "light" : "main"
                    ]
                  } !important`,
                },
              },
            },
            "& .MuiSwitch-checked": {
              transform: `translateX(${styles[size].switchBase.transform})px !important`,
            },
            "& .MuiSwitch-thumb": {
              width: `${styles[size].thumb.width}px !important`,
              height: `${styles[size].thumb.height}px !important`,
              boxShadow: "none",
            },
            "& .MuiSwitch-track": {
              height: styles[size].root.height,
              width : `${styles[size].root.height} !important`,
              borderRadius: 50,
              opacity: 1,
              backgroundColor: `${
                colored ? theme.palette.error.main : theme.palette.primary.main
              } !important`,
            },
          },
        ]}
        {...otherProps}
      />
    </Box>
  );
};

export default Switch;
