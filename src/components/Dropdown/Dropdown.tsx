import React, { forwardRef, useState, useEffect } from "react";
import {
  Typography as MuiTypography,
  InputBase as MuiInputBase,
  InputLabel as MuiInputLabel,
  Paper,
  Box,
} from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@mui/material";

export interface IBootstrapInputProps {
  alert: boolean;
  width: number;
  disabled: boolean;
  size: "small" | "medium";
  [key: string]: any;
}

const BootstrapInput = forwardRef<any, IBootstrapInputProps>(
  ({ alert, width, classes, disabled, size = "small", ...otherProps }, ref) => {
    const theme = useTheme();
    return (
      <MuiInputBase
        sx={[
          {
            "& .MuiInputBase-input": {
              borderRadius: "4px",
              position: "relative",
              ...(size === "small"
                ? {
                    ...theme.typography.body1,
                  }
                : {
                    ...theme.typography.body2,
                  }),
              border: `1px solid ${theme.palette.grey[100]}`,
              borderColor: alert
                ? theme.palette?.support?.error?.main
                : theme.palette.grey[100],
              backgroundColor: disabled
                ? theme.palette.grey[150]
                : "#ffffff",
              alignSelf: "flex-end",
              height: size === "small" ? "14px" : "18px",
              padding: size === "small" ? "8px 12px" : "10px 16px",
              cursor: disabled ? "not-allowed" : "pointer",
              caretColor: "transparent",
              color: `#1A1A1A !important`,
              backgroundImage: `url(/DropdownIcon.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "95% 50%",
              backgroundSize: "8px",
              width:
                size === "small"
                  ? width
                    ? `${width - 26}px`
                    : "286px"
                  : width
                  ? `${width - 34}px`
                  : "278px",
              "&:focus": {
                borderColor: alert
                  ? theme.palette?.support?.error?.main
                  : theme.palette.primary.main,
              },
            },
          },
        ]}
        ref={ref}
        disabled={disabled}
        {...otherProps}
      />
    );
  }
);

export interface IDropDown {
  label?: string;
  placeholder?: string;
  required?: boolean;
  width?: number;
  alert?: boolean;
  options?: any[];
  size?: "small" | "medium";
  value?: {
    id: number;
    name: string;
  };
  onChange?: any;
  children?: React.ReactElement;
  disabled?: boolean;
  [key: string]: any;
}

const Dropdown = ({
  label,
  placeholder,
  required,
  width,
  alert,
  options,
  value,
  size = "small",
  onChange,
  children,
  disabled,
  elevation,
  ...otherProps
}: IDropDown) => {
  const [data, setData] = useState(value);
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    setData(value);
  }, [value]);
  const handleSelect = (dropDownData: IDropDown["value"]) => {
    setData(dropDownData);
    if (onChange) onChange(dropDownData);
  };
  const theme = useTheme();
  return (
    <div
      {...otherProps}
      style={{
        position: "relative",
      }}
    >
      <Box
        // sx = {{
        //   '&:focus-within' : {

        //   }

        // }}
        onFocus={() => setisOpen(true)}
        onBlur={() => setisOpen(false)}
      >
        <MuiInputLabel
          sx={[
            size === "small"
              ? {
                  ...theme.typography.h6,
                }
              : {
                  ...theme.typography.h5,
                },
            {
              color: "#1A1A1A",
              "&>span": {
                color: theme.palette?.support?.error?.main,
              },
            },
          ]}
        >
          {label} <span>{required && label ? "*" : ""}</span>
        </MuiInputLabel>
        <BootstrapInput
          placeholder={placeholder}
          required={required}
          width={width}
          size={size}
          alert={alert || !data ? alert : false}
          value={data ? (data.name ? data.name : "") : ""}
          disabled={disabled}
        />
      </Box>
      <Paper
        elevation={elevation ?? 1}
        sx={{
          display: isOpen ? "block" : "none",
          width: width ? `${width}px` : "312px",
        }}
      >
        {children}
        <PerfectScrollbar style={{ maxHeight: "180px" }}>
          {options ? (
            options.map((option, index) => (
              <MuiTypography
                variant="body1"
                key={index}
                onMouseDown={() => handleSelect(option)}
              >
                {option.name}
              </MuiTypography>
            ))
          ) : (
            <Paper
              elevation={1}
              sx={{
                display: isOpen ? "block" : "none",
                width: width ? `${width}px` : "312px",
              }}
            >
              {children}
            </Paper>
          )}
        </PerfectScrollbar>
      </Paper>
    </div>
  );
};

export default Dropdown;
