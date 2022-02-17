import React, { forwardRef, useState, useEffect } from "react";

import MuiTypography from "@mui/material/Typography";
import MuiInputBase from "@mui/material/InputBase";
import MuiInputLabel from "@mui/material/InputLabel";

import MuiBox from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";

import type { InputBaseProps } from "@mui/material/InputBase";
import { inputGlobalStyles } from "../SelectChipDropdown/SelectChipDropdown";
export interface IBootstrapInputProps extends InputBaseProps {
  /**
   * Input Border Color would turn red if true
   */
  alert?: boolean;

  /**
   * Set Custom Width for the component
   */
  width?: number;

  /**
   * If True component would be disabled
   */
  disabled?: boolean;
  size?: "small" | "medium";
  [key: string]: any;
}

const BootstrapInput = forwardRef<any, IBootstrapInputProps>(
  (
    {
      alert = false,
      width = 312,
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
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "unset",
            },
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
              borderColor: disabled
                ? theme.palette.grey[100]
                : alert
                ? theme.palette.error.main
                : "",
              backgroundColor: disabled ? theme.palette.grey[150] : "#ffffff",
              alignSelf: "flex-end",
              height: size === "small" ? "14px" : "18px",
              padding: size === "small" ? "8px 12px" : "10px 16px",
              cursor: disabled ? "not-allowed" : "pointer",
              caretColor: "transparent",
              backgroundImage: `url(${"https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-6.png"})`,
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

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 200px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  & p {
    padding: 8px 12px;
    order :2;
    display: flex;
    cursor: pointer;
    & span {
      flex-grow: 1;
    }

    & svg {
      padding : 4px 6px;
      margin : 0;
    }
    
    

    
  }
  & li:visited {
    
    background-color : #e6f7ff!important;
  }

  
  & li:hover {
    background-color : ${theme.palette.primary.contrastText}!important;
  }
    
    
  
  & p[data-focus='true'] {
    & svg {
      color: ${theme.palette.common.black};
    },
  }
  

  
`
);

export interface IDropDown {
  /**
   * Input Label Text
   */
  label?: string;
  /**
   * Input Placeholder text
   */
  placeholder?: string;
  /**
   * Whether the input if compulsary or not
   */
  required?: boolean;

  /**
   * Set Custom width for the component
   */
  width?: number;

  /**
   * If true Input Border Color would turn to red
   */
  alert?: boolean;

  /**
   * Dropdown options
   */
  options?: any[];
  size?: "small" | "medium";

  /**
   * Default Value for the dropdown
   */
  value?: {
    id: number;
    name: string;
  };

  /**
   * OnChange Handler
   */
  onChange?: any;

  /**
   * Element would stick to the top or bottom in the dropdown
   */
  children?: React.ReactNode;
  childrenPlacement?: "top" | "bottom";
  disabled?: boolean;
  [key: string]: any;
}

const Dropdown = ({
  label,
  placeholder,
  required,
  width = 312,
  alert,
  options = [],
  value,
  size = "small",
  onChange,
  children,
  disabled,
  childrenPlacement = "top",
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
      {inputGlobalStyles}
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
                "&>span": {
                  color: theme.palette?.support?.error?.main,
                },
                marginBottom: size === "small" ? "4px" : "8px",
                color: disabled ? theme.palette.grey[100] : `#1A1A1A !important`,
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

      <Listbox sx={{ display: isOpen ? "block" : "none", width : {width} }}>
        <li
          style={{
            position: "sticky",
            top: "0",
            backgroundColor: theme.palette.common.white,
          }}
        >
          {childrenPlacement === "top" && children}
        </li>
        {options &&
          options.length > 0 &&
          options.map((option, index) => (
            <li
              key={option.id}
              style={{
                color: data?.id === option.id ? theme.palette.primary.dark : "",
                backgroundColor:
                  data?.id === option.id ? '#e6f7ff' : "",
              }}
            >
              <MuiTypography
                onMouseDown={() => handleSelect(option)}
                variant="body1"
                sx={{
                  ...theme.typography.body1,
                }}
              >
                {option.name}
              </MuiTypography>
            </li>
          ))}
        <li
          style={{
            position: "sticky",
            bottom: "0",
            backgroundColor: theme.palette.common.white,
          }}
        >
          {childrenPlacement === "bottom" && children}
        </li>
      </Listbox>
    </MuiBox>
  );
};

export default Dropdown;
