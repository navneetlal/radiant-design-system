import React from 'react';
import { makeStyles } from '@mui/styles';

import { InputLabel as MuiInputLabel, InputBase as MuiInputBase } from '@mui/material';
import { ClassNameMap } from '@mui/styles';
import Button from '../Button/Button';


const bootStrapStyles = makeStyles((theme:any) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    ...theme.typography.body2,
    border: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: ({ disabled }: any) =>
      disabled ? theme.palette.secondary[theme.palette.type] : theme.palette.blackAndWhite.light,
    width: ({ width }: any) => (width ? width : 192),
    cursor: ({ disabled }: any) => (disabled ? 'not-allowed' : 'pointer'),
    borderColor: ({ alert }: any) =>
      alert ? theme.palette.error.main : theme.palette.secondary.main,
    alignSelf: 'flex-end',
    height: 32, // subtracting padding
    padding: '8px 12px',
    color: `${theme.palette.blackAndWhite.main} !important`,
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
    '&:not(:placeholder-shown):invalid': {
      borderColor: theme.palette.error.main,
    },
    
    boxSizing: 'border-box',
  },
  medium: {
    height: 40,
    ...theme.typography.body1,
  },
}));

export interface IBootstrapInputProps {
  alert?: boolean;
  size: 'small' | 'medium';
  width?: number | string;
  classes?: ClassNameMap<string>;
  disabled?: boolean;
  placeholder?: string;
  [key: string]: any;
}

const BootstrapInput = ({
  alert = false,
  width = 192,
  size = 'small',
  classes,
  disabled = false,
  pattern,
  ...otherProps
}: IBootstrapInputProps) => {
  const classe = bootStrapStyles({ alert, width, disabled });
  return (
    <MuiInputBase
      classes={{ input: classe.input, root: classe.root, ...classes }}
      disabled={disabled}
      style={{
        width: '100%',
      }}
      inputProps={{ className: size === 'medium' ? classe.medium : '', pattern }}
      {...otherProps}
    />
  );
};

const useStyles = makeStyles((theme:any) => ({
  root: {
    flexWrap: 'wrap',
    position: 'relative',
    // width: 'max-content',
    width: '100%',
  },
  label: {
    ...theme.typography.h6,
    color: theme.palette.blackAndWhite.main,
    '&>span': {
      color: theme.palette.error.main,
    },
  },
  labelMedium: {
    ...theme.typography.h5,
    color: theme.palette.blackAndWhite.main,
    '&>span': {
      color: theme.palette.error.main,
    },
  },
  action: {
    minWidth: '50px !important',
    position: 'absolute',
    right: 2,
    top: ({ label }: any) => (label ? 28 : 28),
    height: 24,
    padding: '8px 8px',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    ...theme.typography.body2,
  },
}));

export interface ITextboxProps {
  label?: string;
  placeholder?: string;
  width?: number | string;
  size: 'small' | 'medium';
  alert?: boolean;
  value?: string;
  id?: string;
  onClick?: any;
  required?: boolean;
  disabled?: boolean;
  children?: React.ReactElement;
  action?: any;
  [key: string]: any;
}

const Textbox = ({
  label,
  size = 'small',
  placeholder,
  width,
  alert,
  value,
  id,
  onClick,
  required,
  disabled,
  action,
  pattern,
  ...otherProps
}: ITextboxProps) => {
  const classes = useStyles({ width, label });

  return (
    <div className={classes.root}>
      <MuiInputLabel
        className={size === 'small' ? classes.label : classes.labelMedium}
        htmlFor={id}
      >
        {label} <span>{required ? '*' : ''}</span>
      </MuiInputLabel>
      <BootstrapInput
        size={size}
        placeholder={placeholder}
        width={width}
        required={required}
        alert={alert}
        id={id}
        value={value}
        onClick={onClick}
        disabled={disabled}
        pattern={pattern}
        {...otherProps}
      />
      {action && (
        <Button
          variant="text"
          size="small"
          color="primary"
          disabled={disabled}
          className={classes.action}
          {...action}
        />
      )}
    </div>
  );
};
export default Textbox;
