import React, { useEffect, useState } from "react";
import { Box, useAutocomplete } from "@mui/material";
import { NoSsr } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { InputBase as MuiInputBase } from "@mui/material";
import { InputLabel as MuiInputLabel } from "@mui/material";
import {
  Typography as MuiTypography,
  Paper as MuiPaper,
  Grid as MuiGrid,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { ClassNameMap } from "@mui/material";
import Chips from "./Chip";

export interface IBootstrapInputProps {
  alert: boolean;
  width: number;
  classes: ClassNameMap<string>;
  placeholder: string;
  [key: string]: any;
}

const BootstrapInput = React.forwardRef<any, IBootstrapInputProps>(
  ({ alert, width, classes, ...otherProps }, ref) => {
    const theme = useTheme();
    return (
      <MuiInputBase
        classes={{ ...classes }}
        ref={ref}
        {...otherProps}
        sx={[
          {
            "& .MuiInputBase-input": {
              order: 3,
              padding: 0,
              minWidth: 30,
              ...theme.typography.body2,
              borderColor: alert ? theme.palette.error.main : "#C7C7C7",
              alignSelf: "flex-end",
              height: 32 - 8,
              color: `1A1A1A !important`,
              width: width ? width - 24 : 200 - 24,
            },
            "& .MuiInputBase-root": {
              "label + &": {
                marginTop: theme.spacing(1),
              },
            },
          },
        ]}
      />
    );
  }
);


export interface ICustomChipProps {
  label: string;
  placeholder: string;
  onChange: any;
  width: number;
  alert: boolean;
  options: {
    id: number;
    name: string;
  }[];
  selectedOptions: any;
  [key: string]: any;
}

export default function CustomChipDropdown({
  label,
  placeholder,
  width,
  alert,
  options,
  onChange,
  selectedOptions,
  ...otherProps
}: ICustomChipProps) {
  const [defaultValue, setDefaultValue] = useState(
    selectedOptions
      ? options.filter((option) => selectedOptions.includes(option.name))
      : []
  );
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
    id: "customized-hook-demo",
    multiple: true,
    defaultValue,
    options,
    getOptionLabel: (option) => option.name,
  });
  useEffect(() => {
    setDefaultValue(
      selectedOptions
        ? options.filter((option) => selectedOptions.includes(option.name))
        : []
    );
  }, [selectedOptions]);
  useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  const theme = useTheme();
  return (
    <NoSsr>
      <div
        style={{
          width: width ? width - 24 : 200 - 24,
        }}
      >
        <div {...getRootProps()}>
          <MuiInputLabel
            sx={[
              {
                ...theme.typography.h6,
                marginBottom: 8,
                color: "#1A1A1A",
              },
            ]}
            {...getInputLabelProps()}
          >
            {label}
          </MuiInputLabel>
          <Box
            ref={setAnchorEl}
            sx={[
              focused && {
                borderColor: alert
                  ? theme.palette.error.main
                  : theme.palette.primary.main,
                alignSelf: "flex-end",
              },
              {
                display: "flex",
                flexWrap: "wrap",
                borderRadius: 4,
                position: "relative",
                ...theme.typography.body2,
                border: `1px solid ${theme.palette.secondary.main}`,
                backgroundColor: `#ffffff`,
                borderColor: alert
                  ? theme.palette.error.main
                  : theme.palette.secondary.main,
                alignSelf: "flex-end",
                minHeight: 32 - 8, // Subtracting padding 4px * 2
                overflow: "hidden",
                padding: "4px 12px",
                paddingRight: 0,
                color: "black !important",
                // backgroundImage: `url(${require('../icons/IconColor.jsx')})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: '95% 50%',
                // backgroundSize: '8px',
                width: width ? width - 24 : 200 - 24,
                "&:focus": {
                  borderColor: alert
                    ? theme.palette.error.main
                    : theme.palette.primary.main,
                },
              },
            ]}
          >
            <BootstrapInput
              placeholder={placeholder}
              width={width}
              alert={alert}
              {...otherProps}
              {...getInputProps()}
            />
          </Box>
        </div>
        {groupedOptions.length > 0 ? (
            //@ts-ignore
          <MuiPaper
            elevation={0}
            sx={[{
                width : width || 200,
                margin: 1,
                padding: 1,
                zIndex: 1,
                position: 'absolute',
                overflow: 'auto',
                maxHeight: 200,
                '&>p': {
                    padding: '8px 16px',
                    order: 2,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.contrastText,
                    },
                    '& svg': {
                      color: 'transparent',
                    },
                  },
                  "& p[aria-selected='true']": {
                    backgroundColor: theme.palette.primary.contrastText,
                    '& svg': {
                      color: theme.palette.primary.main,
                    },
                  },
                  "& p[data-focus='true']": {
                    backgroundColor: theme.palette.primary.contrastText,
                    cursor: 'pointer',
                    '& svg': {
                      color: '1A1A1A',
                    },
                  },
            }]}
            {...getListboxProps()}
          >
            {groupedOptions.map((option, index) => (
              <MuiTypography
                variant="body1"
                //@ts-ignore
                {...getOptionProps({ option, index })}
              >  
              {/* @ts-ignore */}
                {option.name} <CheckIcon fontSize="small" />
              </MuiTypography>
            ))}
          </MuiPaper>
        ) : null}
        <MuiGrid
          container
          spacing={1}
          style={{
            marginTop: 5,
          }}
        >
          {value.map((option, index) => (
            <MuiGrid item>
              <Chips text={option.name} size="medium" selected {...getTagProps({ index })} />
            </MuiGrid>
          ))}
        </MuiGrid>
      </div>
    </NoSsr>
  );
}
