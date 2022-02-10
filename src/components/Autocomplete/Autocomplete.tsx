import * as React from "react";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";
import useAutocomplete from "@mui/material/useAutocomplete";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import styled from "@mui/material/styles/styled";
import InputLabel from "@mui/material/InputLabel";

const Root = styled("div")(
  () => `
  color: 'rgba(0,0,0,.85)';
  font-size: 14px;
`
);

const InputWrapper = styled("div")(
  ({ theme }) => `
  border: 1px solid #C7C7C7;
  background-color: #fff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

 
  &.focused {
    border-color: #396de7;
    
  }
  & input:disabled {
    ::placeholder {
      color : ${theme.palette.grey[100]};
    }
  }
  

  & input {
    background-color: #fff;
    color: ${theme.palette.common.black}!important;
    ::placeholder {
      color : ${theme.palette.grey[650]};
    }
    box-sizing: border-box;
    padding: 4px 12px;
    overflow : hidden;
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
    & svg {
      padding : 4px 6px;
      margin : 0;
    }
    

    
  }
  
  
  & p[aria-selected='true'] {
    background-color : #e6f7ff;
    color : ${theme.palette.primary.dark};
    
  }
  & li:hover {
    background-color : ${theme.palette.primary.contrastText}!important;
  }
  
`
);

export const inputGlobalStyles = (
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
  width?: number;
  size?: "small" | "medium";
  alert?: boolean;
  options?: any[];
  value?: {
    id: number;
    name: string;
  };
  childrenPlacement?: "top" | "bottom";
  onChange?: any;
  children?: React.ReactElement;
  disabled?: boolean;
  onInputChange?: any;
  [key: string]: any;
}

export default function Autocomplete({
  label,
  placeholder,
  required,
  width = 312,
  size = "medium",
  childrenPlacement = "top",
  alert,
  options = [],
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
    options: options,
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Root {...otherProps}>
      {inputGlobalStyles}
      <Box
        {...getRootProps()}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        sx={{
          "&:focus-within": {
            "&+$listbox": {
              display: "block",
            },
          },
        }}
      >
        {(label || required) && (
          <InputLabel
            {...getInputLabelProps()}
            sx={{
              ...theme.typography.h6,
              color: disabled
                ? theme.palette.grey[100]
                : theme.palette.common.black,
              "&>span": {
                color: theme.palette.error.main,
              },
            }}
          >
            {label} <span>{required && "*"}</span>
          </InputLabel>
        )}

        <InputWrapper
          className={focused ? "focused" : ""}
          sx={{
            width: width,
            borderColor: disabled
              ? theme.palette.grey[100]
              : alert
              ? theme.palette.error.main
              : "",
            backgroundColor: disabled
              ? theme.palette.grey[150]
              : theme.palette.common.white,
          }}
        >
          <input
            type="text"
            {...getInputProps()}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            style={{
              height: size === "small" ? "32px" : "40px",
              backgroundImage: `url(${"https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-6.png"})`,
              color: disabled
                ? theme.palette.grey[100]
                : theme.palette.grey[650],

              backgroundRepeat: "no-repeat",
              backgroundColor: disabled
                ? theme.palette.grey[150]
                : theme.palette.common.white,
              backgroundPosition: "95% 50%",
              backgroundSize: "8px",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
          />
        </InputWrapper>
      </Box>

      {(groupedOptions.length > 0 || options.length === 0) && (
        <Listbox
          {...getListboxProps()}
          sx={{
            width: `${width}px`,
            display:
              options.length === 0 && !isOpen
                ? "none"
                : options.length === 0 && !isOpen
                ? "block"
                : "",
          }}
        >
          <li
            style={{
              position: "sticky",
              top: "0",
              backgroundColor: theme.palette.common.white,
            }}
          >
            {childrenPlacement === "top" && children}
          </li>
          {groupedOptions &&
            groupedOptions.map((option, index) => (
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
      )}
    </Root>
  );
}
