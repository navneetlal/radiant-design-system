import React from 'react';
import { useTheme } from '@mui/material';
import { ClassNameMap } from '@mui/styles';
import { Box } from '@mui/material';




export interface IBaseProps {
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  children?: React.ReactElement | any;
  size?: 'small' | 'medium' | 'large';
  className?: ClassNameMap<string> | string;
  style?: any;
  variant?: string
}

const Base = ({ color = "primary", children, size, className, style, ...otherProps }: IBaseProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={[
          {
            fontFamily: '"Source Sans Pro", sans-serif !important',
            borderRadius: '4px !important',
            width: 'max-content',
            padding: '4px 4px',
            //@ts-ignore
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
    </Box>
  );
};

export default Base;
