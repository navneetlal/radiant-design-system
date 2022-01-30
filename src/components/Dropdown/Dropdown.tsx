import React, { forwardRef, useState, useEffect } from "react";

import MuiTypography from "@mui/material/Typography";
import MuiInputBase from "@mui/material/InputBase";
import MuiInputLabel from "@mui/material/InputLabel";
import MuiPaper from "@mui/material/Paper";
import MuiBox from "@mui/material/Box";

import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@mui/material/styles";

import type { InputBaseProps } from "@mui/material/InputBase";

export interface IBootstrapInputProps extends InputBaseProps {
  alert?: boolean;
  width?: number;
  disabled?: boolean;
  size?: "small" | "medium";
  [key: string]: any;
}

const BootstrapInput = forwardRef<any, IBootstrapInputProps>(
  (
    {
      alert = false,
      width = 300,
      disabled = false,
      size = "small",
      ...otherProps
    },
    ref
  ) => {
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
                    ...theme.typography.body2,
                  }
                : {
                    ...theme.typography.body1,
                  }),
              border: `1px solid ${theme.palette.grey[100]}`,
              borderColor: alert
                ? theme.palette?.support?.error?.main
                : theme.palette.grey[100],
              backgroundColor: disabled ? theme.palette.grey[150] : "#ffffff",
              alignSelf: "flex-end",
              height: size === "small" ? "14px" : "18px",
              padding: size === "small" ? "8px 12px" : "10px 16px",
              cursor: disabled ? "not-allowed" : "pointer",
              caretColor: "transparent",
              backgroundImage: `url(/DropdownIcon.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "95% 50%",
              backgroundSize: "8px",
              "&::placeholder": {
                opacity: `1 !important`,
                color: disabled
                  ? `${theme.palette.grey[100]} !important`
                  : `#1A1A1A !important`,
              },
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
  children?: React.ReactNode;
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
}: IDropDown) => {
  const [data, setData] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setData(value);
  }, [value]);
  const handleSelect = (dropDownData: IDropDown["value"]) => {
    setData(dropDownData);
    if (onChange) onChange(dropDownData);
  };
  const theme = useTheme();
  return (
    <MuiBox sx={{ position: "relative" }}>
      <MuiBox onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
        {(label || required) && (
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
                color: disabled ? theme.palette.grey[100] : "#1A1A1A",
                "&>span": {
                  color: theme.palette?.support?.error?.main,
                },
                marginBottom: size === "small" ? "4px" : "8px",
              },
            ]}
          >
            {label} <span>{required ? "*" : ""}</span>
          </MuiInputLabel>
        )}
        <BootstrapInput
          placeholder={placeholder}
          required={required}
          width={width}
          size={size}
          alert={alert || !data ? alert : false}
          value={data ? (data.name ? data.name : "") : ""}
          disabled={disabled}
        />
      </MuiBox>
      <MuiPaper
        elevation={elevation ?? 1}
        sx={{
          display: isOpen ? "block" : "none",
          width: width ? `${width}px` : "312px",
        }}
      >
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
            <MuiPaper
              elevation={1}
              sx={{
                display: isOpen ? "block" : "none",
                width: width ? `${width}px` : "312px",
              }}
            >
              {children} //! Need to test if this is required
            </MuiPaper>
          )}
        </PerfectScrollbar>
        {children}
      </MuiPaper>
    </MuiBox>
  );
};

export default Dropdown;
