import React from 'react';

import {Button as MuiButton} from '@mui/material';
import { useTheme } from '@mui/material';



export interface IButtonProps {
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'blackAndWhite' | 'success';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactElement;
  [key: string]: any;
}

const IconButton = ({ variant, color, size, text, icon, ...otherProps }: IButtonProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant={variant}
      sx = {[
          {
            minWidth: 32,
            '& $text': {
              maxWidth: 0,
              overflow: 'hidden',
              transition: 'all .2s ease-out',
            },
            '&:hover $text': {
              maxWidth: 500,
              transition: 'all .2s ease-in',
              paddingLeft: 5,
            },
          },
          variant === 'contained' && {
              background: `${theme}.palette.${color}.main`,
              color : `#ffffff`,
              '&:hover' : {
                  background : `${theme}.palette.${color}.dark`
              }
          },
          variant === 'outlined' && {
                color : `${theme}.palette.${color}.main`,
                background : '#ffffff',
                border : `1px solid`,
                borderColor : `${theme}.palette.${color}.main`,
                '&:hover' : {
                    background : `${theme}.palette.${color}.contastText`
                }
          },
          size === 'small' && {
            minWidth: 32,
            height: 32,
            padding: '8px',
            '& svg': {
              width: 16,
              height: 16,
            },
          },
          size === 'medium' && {
            minWidth: 40,
            height: 40,
            padding: '10px',
            '& svg': {
              width: 20,
              height: 20,
            },
          },
          size === 'large' && {
            minWidth: 48,
            height: 48,
            ...theme.typography.h4,
            padding: '12px',
            '& svg': {
              width: 24,
              height: 24,
            },
          }

          
      ]}
      startIcon={icon}
      {...otherProps}
    >
      {text && <span style={{textTransform : 'none', whiteSpace : 'nowrap'}}>{text}</span>}
    </MuiButton>
  );
};


export default IconButton;
