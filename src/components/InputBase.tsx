import { ClassNameMap } from "@mui/material";
import { forwardRef } from "react";
import { InputBase as MuiInputBase } from "@mui/material";
import { useTheme } from "@mui/material";

export interface IBootstrapInputProps {
    alert?: boolean;
    height: "small" | "medium";
    width?: number;
    classes?: ClassNameMap<string>;
    disabled?: boolean;
    value: string;
    [key: string]: any;
  }
  
  const BootstrapInput = forwardRef<any, IBootstrapInputProps>(
    (
      {
        alert = false,
        width = 192,
        classes,
        disabled = false,
        placeholder,
        height,
        value,
        ...otherProps
      },
      ref
    ) => {
      const theme = useTheme();
      return (
        <MuiInputBase
          sx={[
            {
              "& .MuiInputBase-root": {
                "label + &": {
                  marginTop: theme.spacing(1),
                },
              },
              "& .MuiInputBase-input": {
                borderRadius: 4,
                position: "relative",
                ...theme.typography.body1,
                border: `1px solid ${theme.palette.secondary.main}`,
                borderColor: disabled ? theme.palette.secondary.light : "#ffffff",
                alignSelf: "flex-end",
                // height: ({ height }: any) => (height === 'small' ? 32 - 16 : 40 - 16), // Subtracting padding...!
                padding: "8px 12px",
                cursor: disabled ? "not-allowed" : "text",
                color: `#1A1A1A !important`,
                // backgroundImage: `url('DropDownIcon.svg')`,
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: '95% 50%',
                // backgroundSize: '8px',
                width: width ? width - 24 : 100 - 24,
                "&:focus": {
                  borderColor: alert
                    ? theme.palette.error.main
                    : theme.palette.primary.main,
                },
              },
            },
            height === "small" && {
              ...theme.typography.body2,
              height: 30 - 16,
            },
            height === "medium" && {
              ...theme.typography.body1,
              height: 38 - 16,
            },
          ]}
          ref={ref}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          {...otherProps}
        />
      );
    }
  );
  

  export default BootstrapInput;