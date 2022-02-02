import * as React from "react";
import { Box, GlobalStyles, useAutocomplete } from "@mui/material";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { useTheme } from "@mui/material/styles";
const Root = styled("div")(
  () => `
  color: 'rgba(0,0,0,.85)';
  font-size: 14px;
`
);

const InputWrapper = styled("div")(
  () => `
  width: 300px;
  border: 1px solid #C7C7C7;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #396de7;
    
  }

  & input {
    background-color: #fff;
    color: 'rgba(0,0,0,.85)'
    height: 32px;
    box-sizing: border-box;
    padding: 4px 12px;
    overflow : hidden;
    width: 0;
    min-width: 32px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
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
  max-height: 180px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 999;
  
  & p {
    padding: 8px 12px;
    order :2;
    display: flex;
    cursor: pointer;

    

    
  }
  
  
  & p[aria-selected='true'] {
    font-weight: 600;
    background-color : #e6f7ff
    
  }
  & li:hover {
    background-color : ${theme.palette.primary.contrastText}
  }
  
`
);

const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      scrollbarColor: "#264ca4 #f5f8ff !important",
      "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        position: "absolute",
      },
      "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        borderRadius: "4px",
        backgroundColor: "#264ca4",
        minWidth: "6px",
        minHeight: "6px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f5f8ff",
        position: "absolute",
      },
      "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
        background: "#12285a",
      },
    }}
  />
);
export interface ISelectChipsProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  width: number;
  height: "small" | "medium";
  alert?: boolean;
  options: any[];
  value?: {
    id: number;
    name: string;
  };
  childrenPlacement?: "top" | "bottom";
  onChange?: any;
  children?: React.ReactElement;
  disable?: boolean;
  onInputChange?: any;
  [key: string]: any;
}

export default function Autocomplete({
  label,
  placeholder,
  required,
  width,
  height,
  childrenPlacement = "top",
  alert,
  options,
  value,
  onChange,
  onInputChange,
  children,
  disabled,
  ...otherProps
}: ISelectChipsProps) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    focused,
    groupedOptions,
  } = useAutocomplete({
    defaultValue: value,
    multiple: false,
    options: options!,
    onChange: (_, v) => {
      if (onChange) onChange(v);
    },
    onInputChange: (e) => {
      if (onInputChange) onInputChange(e);
    },
    getOptionLabel: (option) => (option.name ? option.name : ""),
    isOptionEqualToValue: (t, v) => t.name === v.name,
  });
  const theme = useTheme();
  return (
    <Root {...otherProps}>
      {inputGlobalStyles}
      <Box
        {...getRootProps()}
        sx={{
          "&:focus-within": {
            "&+$listbox": {
              display: "block",
            },
          },
        }}
      >
        <InputLabel
          {...getInputLabelProps()}
          sx={{
            ...theme.typography.h6,
            color: theme.palette.common.black,
            "&>span": {
              color: theme.palette.error.main,
            },
          }}
        >
          {label} <span>{required && label ? "*" : ""}</span>
        </InputLabel>
        <InputWrapper className={focused ? "focused" : ""}>
          <input
            {...getInputProps()}
            placeholder={placeholder}
            required={required}
            width={width}
            disabled={disabled}
            style={{
              height: height === 'small' ? '32px' : "40px",
              backgroundImage: `url(${"https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-6.png"})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "95% 50%",
              backgroundSize: "8px",
            }}
          />
        </InputWrapper>
      </Box>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {childrenPlacement === "top" && children}
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <Typography
                sx={{
                  ...theme.typography.body1,
                }}
                {...getOptionProps({ option, index })}
              >
                {option.name}
              </Typography>
            </li>
          ))}
          {childrenPlacement === "bottom" && children}
        </Listbox>
      ) : null}
    </Root>
  );
}
