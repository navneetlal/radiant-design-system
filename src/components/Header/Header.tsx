//! Revisit to remove @mui/styles as a dependency

import React from 'react';
import MuiBox from '@mui/material/Box';

import { makeStyles } from '@mui/styles';

import type { BoxProps } from '@mui/material/Box'

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: 'auto',
    height: '88px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.primary[200]}`,
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

export interface IHeaderProps extends BoxProps {
  children: React.ReactNode;
}

const Header = ({ children, className, ...otherProps }: IHeaderProps) => {
  const classes = useStyles();
  return (
    <MuiBox className={`${classes.root} ${className} `} {...otherProps}>
      {children}
    </MuiBox>
  );
};

export default Header;
