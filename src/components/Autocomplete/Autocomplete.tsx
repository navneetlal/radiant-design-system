import * as React from "react";
import MuiBox from "@mui/material/Box";
import useAutocomplete from "@mui/material/useAutocomplete";
import MuiTypography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import MuiInputLabel from "@mui/material/InputLabel";
import {
  Root,
  InputWrapper,
  inputGlobalStyles,
} from "../SelectChipDropdown/SelectChipDropdown";

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

export interface ISelectChipsProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  width?: number;
  size?: "small" | "medium";
  alert?: boolean;
  /**
   * Options inside the dropdown
   */
  options?: any[];
  /**
   * Default Value
   */
  value?: {
    id: number;
    name: string;
  };
  /**
   * Whether you want the child to stick to the top or the bottom of the dropdown
   */
  childrenPlacement?: "top" | "bottom";
  onChange?: any;

  /**
   * This element will stick to the top or bottom
   */
  children?: React.ReactElement;
  disabled?: boolean;

  /**
   * Callback on Input Change
   */
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
    options,
    onChange: (_, v) => {
      if (onChange) onChange(v);
    },
    onInputChange: (e) => {
      if (onInputChange) onInputChange(e);
    },
    value: value,
    //@ts-ignore
    getOptionSelected: (t: any, v: any) => t?.name === v?.name,
    getOptionLabel: (option) => (option.name ? option.name : ""),
  });
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Root {...otherProps}>
      {inputGlobalStyles}
      <MuiBox
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
          <MuiInputLabel
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
          </MuiInputLabel>
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
              height: size === "small" ? "30px" : "38px",
              backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA9klEQVRIib3S3ypEURiG8Z99oiQ1Ug4UF6Ek3IWUcA9yA3IDmmuQmrmQkdyBOaQpJU5E+8yfg712pG1m7zVre+s7WLV6nrW+Xv4h2xjiM/EMsaUleDm3GTrJd/KdxQz9FgV9WMKL9Ot5xXKGZ3RbeP05HsvDfDikev0TFn4bTxIKjqu+NIv7BPC7wKrMQQLB/l9wmMFgCvh1YIzNOt4j4B/YmAQvcxkhuKgLhxW8NYDnWG0igLMGgtOmcJjDqAZ8FO5G5aiG4DAWTlG5qzHwGzVqOSmbigpW1XJnWniZXoWglwpOUcH8BzzHWkoB7OEhzG5qeHS+AGL7/4uMQPSDAAAAAElFTkSuQmCC)`,

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
      </MuiBox>

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
                <MuiTypography
                  sx={{
                    ...theme.typography.body1,
                  }}
                  {...getOptionProps({ option, index })}
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
      )}
    </Root>
  );
}
