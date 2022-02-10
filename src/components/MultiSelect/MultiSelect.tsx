import React, { useEffect, useState } from "react";

import MuiInputBase from "@mui/material/InputBase";
import MuiInputLabel from "@mui/material/InputLabel";
import MuiGrid from "@mui/material/Grid";
import MuiBox from "@mui/material/Box";
import NoSsr from "@mui/material/NoSsr";

import { useTheme } from "@mui/material/styles";
import Chips from "../Chip/Chip";

export interface IBootstrapInputProps {
  alert: boolean;
  width: number;
  placeholder: string;
  [key: string]: any;
}

const BootstrapInput = React.forwardRef<any, IBootstrapInputProps>(
  ({ alert, width, classes, placeholder, disabled, ...otherProps }, ref) => {
    const theme = useTheme();
    return (
      <MuiInputBase
        sx={{
          
          flexGrow: 1,
          WebkitBoxFlex: 1,
          paddingBottom: "0px !important",

          "& .MuiInputBase-input": {
            order: "3px",
            padding: 0,
            marginLeft : '16px',
            ...theme.typography.body2,
            borderColor: alert
              ? theme.palette?.support?.error?.main
              : theme.palette.grey[100],
            alignSelf: "flex-end",
            height: "32px",
            color: `${theme.palette.common.black} !important`,
            width : 'auto',
    
            cursor: "pointer",
          },
        }}
        inputRef={ref}
        placeholder={placeholder}
        disabled={disabled}
        {...otherProps}
      />
    );
  }
);

export interface IMultiSelectProps {
  label?: string;
  placeholder?: string;
  onChange?: any;
  width?: number;
  alert?: boolean;
  options?: string[];
  required?: boolean;
  selectedOptions?: any;
  disabled?: boolean;
  [key: string]: any;
}

const tempFunc = () => {
  console.log();
};

export default function MultiSelect({
  label,
  placeholder,
  onChange = tempFunc,
  width = 312,
  alert,
  required = false,
  options,
  disabled,
}: IMultiSelectProps) {
  const [value, setValue] = useState("");
  const [option, setOption] = useState(new Set(options || []));
  useEffect(() => {
    if (options) setOption(new Set(options));
  }, [options]);

  useEffect(() => {
    onChange([...option]);
  }, [option]);

  const handleAdd = () => {
    option.add(value);
    setOption(new Set(option));
    setValue("");
  };
  const handleDelete = (item: any) => () => {
    option.delete(item);
    setOption(new Set(option));
  };
  const theme = useTheme();

  return (
    <NoSsr>
      <div>
        <div>
          {(label || required) && (
            <MuiInputLabel
              disabled={disabled}
              sx={{
                ...theme.typography.h6,
                color: "#1A1A1A",
                "&>span": {
                  color: theme.palette.error.main,
                },
              }}
            >
              {label}
              <span>{required && "*"}</span>
            </MuiInputLabel>
          )}

          <MuiBox
            sx={{
              
              display: "flex",
              flexWrap: "wrap",
              borderRadius: "4px",
              position: "relative",
              ...theme.typography.body2,
              border: `1px solid ${theme.palette.grey[100]}`,
              backgroundColor: disabled ? theme.palette.grey[150] : "#ffffff",
              borderColor: alert
                ? theme.palette?.support?.error?.main
                : theme.palette.grey[100],
              alignSelf: "flex-end",
              minHeight: "32px",
              overflow: "hidden",
              padding: "4px 12px",
              paddingRight: 0,
              width: `${width - 14}px`,
              "&:focus-within": {
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            <MuiGrid container spacing={1}>
              {[...option].map((item, index) => (
                <MuiGrid item key={index}>
                  <Chips
                    label={item}
                    selected
                    fromMultiSelect
                    size="small"
                    onDelete={handleDelete(item)}
                  />
                </MuiGrid>
              ))}
              <BootstrapInput
                placeholder={placeholder}
                width={width}
                style={{ flexGrow: "1px" }}
                value={value}
                alert={alert}
                onChange={(e: any) => {
                  setValue(e.target.value);
                }}
                onKeyPress={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                  if (!e.shiftKey && e.key === "Enter") {
                    e.preventDefault();
                    handleAdd();
                  }
                }}
                disabled={disabled}
              />
            </MuiGrid>
          </MuiBox>
        </div>
      </div>
    </NoSsr>
  );
}
