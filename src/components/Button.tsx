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
      size={size}
      {...otherProps}
      sx = {[
        variant === 'outlined' && {
          color : `${theme}.palette.${color}.main`,
          backgroundColor : `#ffffff`,
          border: `1px solid`,
          borderColor : `${theme}.palette.${color}.main`,
          '&:hover' : {
            backgroundColor : `${theme}.palette.${color}.contastText`
          }
        },
        variant === 'contained' && {
          color : '#ffffff',
          '&:hover' : {
            background : `${theme}.palette.${color}.dark`
          },
          boxShadow : 'none'
        },
        color === 'secondary' && {
          color : '#000000',
          background : `#ffffff`,
          borderColor : `${theme}.palette.${color}.main`,
          '&:hover' : {
              borderColor : '#000000'  
          }
        }
        
      ]}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
