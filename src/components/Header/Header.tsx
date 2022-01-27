import React from 'react';
import { makeStyles } from '@mui/styles';
import { ClassNameMap } from '@mui/styles';

const useStyles = makeStyles((theme:any) => ({
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

export interface IHeaderProps {
  children: React.ReactElement | React.ReactElement[];
  className?: ClassNameMap<string>;
  style?: any;
}

const Header = (props: IHeaderProps) => {
  const classes = useStyles();
  return (
    <header className={`${classes.root} ${props.className} `} style={props.style}>
      {props.children}
    </header>
  );
};

export default Header;
