import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:any) => ({
  label: {
    ...theme.typography.h6,
  },
  input: {
    width: 260,
    height: 32,
    border: '1px solid #c7c7c7',
    borderRadius: 4,
    padding: 0,
    paddingLeft: 12,
    color: 'black',
    ...theme.typography.body2,
    '&::placeholder': {
      color: theme.palette.secondary.dark,
      fontSize: 12,
      fontFamily: '"Source Sans Pro", FontAwesome',
    },
    '&:focus': {
      outline: 'none',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

export interface IInputProps {
  placeholder?: string;
  label?: string;
  size?: 'small' | 'medium';
  value?: string;
  onChange?: any;
  [key: string]: any;
}

const Input = ({
  placeholder,
  label,
  size,
  value,
  onChange,
  className,
  ...otherProps
}: IInputProps) => {
  const styles = {
    medium: {
      height: 32,
      width: 256,
    },
    small: {
      height: 32,
      width: 216,
    },
  };
  const classes = useStyles();
  return (
    <div>
      {label ? (
        <>
          <label className={classes.label}>{label}</label>
          <br />
        </>
      ) : (
        ''
      )}

      <input
        className={`${classes.input} ${className}`}
        style={size ? styles[size] : {}}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
