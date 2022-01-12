import React from 'react';
import {Button as MuiButton} from '@mui/material';


export interface IButtonProps {
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  size?: 'small' | 'medium' | 'large';
  text?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  [key: string]: any;
}

const Button = ({
  variant,
  color,
  size,
  text,
  leftIcon,
  rightIcon,
  ...otherProps
}: IButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      color= {color}
      startIcon={leftIcon}
      endIcon={rightIcon}
      {...otherProps}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
