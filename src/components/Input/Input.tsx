import React from "react";

import MuiBox from "@mui/material/Box";
import MuiInputBase from "@mui/material/InputBase";

import { useTheme } from "@mui/material/styles";

import type { InputBaseProps } from "@mui/material/InputBase";

export interface IInputProps extends InputBaseProps {
  label?: string;
  size?: "small" | "medium";
  [key: string]: any;
}

const Input = ({
  label,
  size,
  ...otherProps
}: IInputProps) => {
  const styles = {
    medium: {
      height: '40px',
      width: '256px',
    },
    small: {
      height: '32px',
      width: '216px',
    },
  };
  const theme = useTheme();
  return (
    <MuiBox>
      {label && (
        <>
          <label style={{ ...theme.typography.h6 }}>{label}</label>
          <br />
        </>
      )}

      <MuiInputBase
        sx={{
          "& .MuiInputBase-input": {
            ...(size ? styles[size] : styles['small']),
            borderTop: "auto",
            outline: "none",
            border: `1px solid ${theme.palette.grey[350]}`,
            borderRadius: '4px',
            padding: 0,
            paddingLeft: '12px',
            color: "black",
            ...theme.typography.body2,
            "&::placeholder": {
              color: theme.palette.grey[650],
              fontSize: '12px',
              fontFamily: '"Source Sans Pro", FontAwesome',
            },
            "&:focus": {
              outline: "none",
              border: `1px solid ${theme.palette.primary.main} !important`,
            },

          }
        }}
        {...otherProps}
      />
    </MuiBox>
  );
};

export default Input;
