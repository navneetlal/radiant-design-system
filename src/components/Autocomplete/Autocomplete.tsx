import React from "react";
import { Typography as MuiTypography } from "@mui/material";
import { InputLabel as MuiInputLabel } from "@mui/material";
import { useAutocomplete } from "@mui/material";
import { Paper as MuiPaper } from "@mui/material";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import {BootstrapInput} from '../Textbox/Textbox';
// export interface IBootstrapInputProps {
//   alert?: boolean;
//   height: "small" | "medium";
//   width?: number;
//   classes?: ClassNameMap<string>;
//   disabled?: boolean;
//   value: string;
//   [key: string]: any;
// }

// const BootstrapInput = forwardRef<any, IBootstrapInputProps>(
//   (
//     {
//       alert = false,
//       width = 192,
//       classes,
//       disabled = false,
//       placeholder,
//       height,
//       value,
//       ...otherProps
//     },
//     ref
//   ) => {
//     const theme = useTheme();
//     return (
//       <MuiInputBase
//         sx={[
//           {
//             "& .MuiInputBase-root": {
//               "label + &": {
//                 marginTop: theme.spacing(1),
//               },
//             },
//             "& .MuiInputBase-input": {
//               borderRadius: 4,
//               position: "relative",
//               ...theme.typography.body1,
//               border: `1px solid ${theme.palette.secondary.main}`,
//               borderColor: disabled ? theme.palette.secondary.light : "#ffffff",
//               alignSelf: "flex-end",
//               // height: ({ height }: any) => (height === 'small' ? 32 - 16 : 40 - 16), // Subtracting padding...!
//               padding: "8px 12px",
//               cursor: disabled ? "not-allowed" : "text",
//               color: `#1A1A1A !important`,
//               // backgroundImage: 'url(/images/DropdownIcon.svg)',
//               // backgroundRepeat: 'no-repeat',
//               // backgroundPosition: '95% 50%',
//               // backgroundSize: '8px',
//               width: width ? width - 24 : 200 - 24,
//               "&:focus": {
//                 borderColor: alert
//                   ? theme.palette.error.main
//                   : theme.palette.primary.main,
//               },
//             },
//           },
//           height === "small" && {
//             ...theme.typography.body2,
//             height: 30 - 16,
//           },
//           height === "medium" && {
//             ...theme.typography.body1,
//             height: 38 - 16,
//           },
//         ]}
//         ref={ref}
//         disabled={disabled}
//         value={value}
//         placeholder={placeholder}
//         {...otherProps}
//       />
//     );
//   }
// );

export interface IAutoComplete {
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
  onChange?: any;
  children?: React.ReactElement;
  disable?: boolean;
  onInputChange?: any;
  [key: string]: any;
}

const AutoComplete = ({
  label,
  placeholder,
  required,
  width,
  height,
  alert,
  options,
  value,
  onChange,
  onInputChange,
  children,
  disabled,
  ...otherProps
}: IAutoComplete) => {
  const theme = useTheme();
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    focused,
    groupedOptions,
    ...otherValues
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
    getOptionSelected: (t, v) => t.name === v.name,
    getOptionLabel: (option) => (option.name ? option.name : ""),
  });
  return (
    <div
      {...otherProps}
      style={{
        position: "relative",
      }}
    >
      <Box
        sx={[
          {
            "&:focus-within": {
              "&+$listbox": {
                display: "block",
              },
            },
          },
        ]}
        {...getRootProps()}
      >
        <MuiInputLabel
          sx={[
            {
              ...theme.typography.h6,
              color: "#1A1A1A",
              "&>span": {
                color: theme.palette.error.main,
              },
            },
          ]}
          {...getInputLabelProps()}
        >
          {label} <span>{required && label ? "*" : ""}</span>
        </MuiInputLabel>
        <BootstrapInput
          placeholder={placeholder}
          required={required}
          width={width}
          size = "small"
          height={height}
          disabled={disabled}
          value={
            otherValues.value && otherValues.value.name
              ? otherValues.value.name
              : ""
          }
          {...getInputProps()}
        />
      </Box>
      {groupedOptions.length > 0 ? (
        <MuiPaper
          elevation={1}
          sx={[
            {
              display: "none",
              width: ({ width }: any) => width || 200,
              margin: 0,
              padding: 0,
              zIndex: 999,
              position: "absolute",
              // top: 58,
              "& p": {
                padding: "8px 16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.contrastText,
                },
              },
              "& p[aria-selected='true']": {
                backgroundColor: "#fafafa",
                fontWeight: 600,
                "& svg": {
                  color: "#1890ff",
                },
              },
              "& p[data-focus='true']": {
                backgroundColor: "#e6f7ff",
                cursor: "pointer",
                "& svg": {
                  color: "1A1A1A",
                },
              },
            },
          ]}
        >
          {children}
          <div
            //{...getListboxProps()}
            style={{
              maxHeight: 180,
              overflowY: "scroll",
              position: "relative",
            }}
            onScroll={(e) => e.stopPropagation()}
          >
            {groupedOptions.map((option, index) => (
              <MuiTypography
                variant="body1"
                {...getOptionProps({ option, index })}
              >
                {option.name}
              </MuiTypography>
            ))}
          </div>
        </MuiPaper>
      ) : otherValues.popupOpen ? (
        <MuiPaper
          elevation={1}
          sx={[
            {
              display: "none",
              width: ({ width }: any) => width || 200,
              margin: 0,
              padding: 0,
              zIndex: 999,
              position: "absolute",
              // top: 58,
              "& p": {
                padding: "8px 16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.contrastText,
                },
              },
              "& p[aria-selected='true']": {
                backgroundColor: "#fafafa",
                fontWeight: 600,
                "& svg": {
                  color: "#1890ff",
                },
              },
              "& p[data-focus='true']": {
                backgroundColor: "#e6f7ff",
                cursor: "pointer",
                "& svg": {
                  color: "1A1A1A",
                },
              },
            },
          ]}
        >
          {children}
        </MuiPaper>
      ) : (
        ""
      )}
    </div>
  );
};

export default AutoComplete;

// export {};
