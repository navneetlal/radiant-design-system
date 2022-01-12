import React from 'react';
import {Button as MuiButton} from '@mui/material';
import { useTheme } from '@mui/material';

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
  const theme = useTheme();
  return (
    <MuiButton
      variant={variant}
      color= {color}
      startIcon={leftIcon}
      endIcon={rightIcon}
      {...otherProps}
      sx = {[
        variant === 'outlined' && {
          color : `${theme}.pallete.${color}.main`,
          background : 'fff',
          border: `1px solid`,
          borderColor : `${theme}.pallete.${color}.main`,
          '&:hover' : {
            background : `${theme}.pallete.${color}.contrastText`
          }
        }
      ]}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
