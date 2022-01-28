import React from 'react';
import MuiBox from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import type { BoxProps } from '@mui/material/Box';

export interface IBoxProps extends BoxProps {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  style?: any;
  variant?: string
}

const Box = ({ color = "primary", children, size = "medium", style, ...otherProps }: IBoxProps) => {
  const theme = useTheme();
  return (
    <MuiBox
      sx={[
        {
          fontFamily: '"Source Sans Pro", sans-serif !important',
          borderRadius: '4px !important',
          width: 'max-content',
          padding: '4px 4px',
          backgroundColor: theme.palette[color].light,
          color: theme.palette.common.black,

        },
        size === 'small' && {
          ...theme.typography.body2
        },
        size === 'medium' && {
          ...theme.typography.body1
        },
        size === 'large' && {
          ...theme.typography.subtitle2
        }

      ]}
      style={style}
      {...otherProps}
    >
      {children}
    </MuiBox>
  );
};

export default Box;
