//! remove makeStyles

import React from "react";
import { InputLabel as MuiInputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles<Theme, any>((theme) => ({
  root: {
    flexWrap: "wrap",
  },
  label: {
    ...theme.typography.h6,
    marginBottom: 4,
    color: ({ disabled }: any) =>
      disabled ? "#A1A1A1" : theme.palette.common.black,
    "&>span": {
      color: theme.palette?.support?.error?.main,
    },
  },
  textarea: {
    resize: "none",
    color: theme.palette.text.primary,
    borderRadius: 4,
    position: "relative",
    ...theme.typography.body2,
    border: `1px solid ${theme.palette.grey[350]}`,
    backgroundColor: ({ disabled }: any) =>
      disabled ? "#F2F2F2" : theme.palette.common.white,
    width: ({ width }: any) => width || 408,
    borderColor: ({ alert }: any) =>
      alert ? theme.palette?.support?.error?.main : theme.palette.grey[350],
    alignSelf: "flex-end",
    padding: "8px 12px",
    "&:focus": {
      borderColor: theme.palette.primary.main,
      outline: "none",
    },
  },
}));

export interface ITextAreaProps {
  label?: string;
  placeholder?: string;
  width?: number | string;
  alert?: boolean;
  value?: string;
  id?: string;
  onClick?: any;
  required?: boolean;
  disabled?: boolean;
  children?: React.ReactElement;
  [key: string]: any;
}

const TextArea = ({
  label,
  placeholder,
  width,
  alert,
  value,
  id,
  onClick,
  required,
  disabled,
  children,
  ...otherProps
}: ITextAreaProps) => {
  const classes = useStyles({ width: 408, disabled, alert });
  return (
    <div className={classes.root}>
      <MuiInputLabel className={classes.label} htmlFor={id}>
        {label} <span>{required ? "*" : ""}</span>
      </MuiInputLabel>
      <textarea
        rows={3}
        placeholder={placeholder}
        value={value}
        id={id}
        required={required}
        disabled={disabled}
        onClick={onClick}
        className={classes.textarea}
        {...otherProps}
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
