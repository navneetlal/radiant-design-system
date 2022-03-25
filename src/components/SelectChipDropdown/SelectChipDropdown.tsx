import * as React from "react";
import { useAutocomplete } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import Chip from "../Chip";
import MuiTypography from "@mui/material/Typography";
import {useTheme, styled} from "@mui/material/styles";
import MuiInputLabel from "@mui/material/InputLabel";
import GlobalStyles from "@mui/material/GlobalStyles";

export const Root: any = styled("div")(
  () => `
  color: 'rgba(0,0,0,.85)';
  font-size: 14px;
`
);

export const InputWrapper: any = styled("div")(
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
      color : ${theme.palette.grey[100]}
    }
  }

  & input {
    ::placeholder {
      color : ${theme.palette.grey[650]}
    }
    background-color: #fff;
    color: ${theme.palette.common.black}!important;
    height: 32px;
    box-sizing: border-box;
    padding: 4px 12px;
    overflow : hidden;
    width: 0;
    min-width: 100px;
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
      color: transparent;
    }
    

    
  }
  
  
  & p[aria-selected='true'] {
    & svg {
      color: #1890ff;
    }
  }
  & li:hover {
    background-color : ${theme.palette.primary.contrastText}
    
    
  }
  & p[data-focus='true'] {
    & svg {
      color: ${theme.palette.common.black};
    },
  }
  

  
`
);

export interface ISelectChipsProps {
  /**
   * Input Label
   */
  label?: string;

  /**
   * Input Placeholder
   */
  placeholder?: string;

  /**
   * OnChange handler
   */
  onChange?: any;

  /**
   * Custom Width
   */
  width?: number;
  
  /**
   * If true border color will become red
   */
  alert?: boolean;

  /**
   * Set true if input is compulsory
   */
  required?: boolean;

  /**
   * If true component would be disabled
   */
  disabled?: boolean;

  /**
   * Dropdown Options which should appear
   */
  options?: {
    id: number;
    name: string;
  }[];

  /**
   * Options which are selected from dropdown
   */
  selectedOptions?: any;
  [key: string]: any;
}

export const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      scrollbarColor: `$#264ca4 #f5f8ff !important`,
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

export default function MultipleSelectChip({
  label,
  placeholder,
  onChange,
  width = 312,
  alert,
  disabled,
  options,
  required,
  selectedOptions,
  ...otherProps
}: ISelectChipsProps) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    defaultValue: selectedOptions,
    multiple: true,
    options: options!,
    onChange: (_, v) => {
      if (onChange) onChange(v);
    },
    getOptionLabel: (option) => option.name,
    isOptionEqualToValue: (t, v) => t.name === v.name,
  });
  const theme = useTheme();
  return (
    <Root>
      {inputGlobalStyles}
      <div {...getRootProps()}>
        {(label || required) && (
          <MuiInputLabel
            {...getInputLabelProps()}
            sx={{
              ...theme.typography.h6,
              color: disabled
                ? theme.palette.grey[100]
                : theme.palette.common.black,
              marginBottom: "4px !important",
              "&>span": {
                color: theme.palette.error.main,
              },
            }}
          >
            {label} <span>{required && "*"}</span>
          </MuiInputLabel>
        )}
        <InputWrapper
          ref={setAnchorEl}
          className={focused ? "focused" : ""}
          sx={{
            borderColor: disabled
              ? theme.palette.grey[100]
              : alert
              ? theme.palette.error.main
              : "",
            backgroundColor: disabled ? theme.palette.grey[150] : "",
            width: width,
          }}
        >
          {value.map((option: any, index: number) => (
            <Chip
              label={option.name}
              {...getTagProps({ index })}
              size="small"
              selected
              fromSelectChip
            />
          ))}
          <input
            {...getInputProps()}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            style={{
              height: "40px",
              flexGrow: "1px",
              cursor: "pointer",
              backgroundColor: disabled
                ? theme.palette.grey[150]
                : theme.palette.common.white,
              color: disabled
                ? theme.palette.grey[100]
                : theme.palette.grey[650],
              backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA9klEQVRIib3S3ypEURiG8Z99oiQ1Ug4UF6Ek3IWUcA9yA3IDmmuQmrmQkdyBOaQpJU5E+8yfg712pG1m7zVre+s7WLV6nrW+Xv4h2xjiM/EMsaUleDm3GTrJd/KdxQz9FgV9WMKL9Ot5xXKGZ3RbeP05HsvDfDikev0TFn4bTxIKjqu+NIv7BPC7wKrMQQLB/l9wmMFgCvh1YIzNOt4j4B/YmAQvcxkhuKgLhxW8NYDnWG0igLMGgtOmcJjDqAZ8FO5G5aiG4DAWTlG5qzHwGzVqOSmbigpW1XJnWniZXoWglwpOUcH8BzzHWkoB7OEhzG5qeHS+AGL7/4uMQPSDAAAAAElFTkSuQmCC)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "95% 50%",
              backgroundSize: "8px",
            }}
            {...otherProps}
          />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} sx={{ width: width }}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <MuiTypography
                sx={{
                  ...theme.typography.body1,
                }}
                {...getOptionProps({ option, index })}
              >
                {option.name} <CheckIcon fontSize="small" />
              </MuiTypography>
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}
