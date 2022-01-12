import React, { useState } from 'react';
import { Typography as MuiTypography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ExpandLess as MuiExpandLessIcon, ExpandMore as MuiExpandMoreIcon } from '@mui/icons-material';
const useStyles = makeStyles((theme:any) => ({
  divOne: {
    height: '78px',
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
  },
  root: {
    padding: '0 40px',
  },
  show: {
    display: 'static',
  },
  hide: {
    display: 'none',
  },
  icon: {
    marginLeft: 16,
  },
}));

export interface IAccordionProps {
  title?: string;
  expanded?: boolean;
  children?: React.ReactElement;
}

const Accordion = ({ expanded = false, children, title }: IAccordionProps) => {
    //@ts-ignore
  const classes = useStyles();
  const [open, setOpen] = useState(expanded || false);
  return (
    <Grid container>
      <Grid item xs={12} className={classes.divOne} onClick={() => setOpen(!open)}>
        <MuiTypography variant="h5">{title}</MuiTypography>
        {open ? (
          <MuiExpandLessIcon className={classes.icon} color="primary" fontSize="small" />
        ) : (
          <MuiExpandMoreIcon className={classes.icon} color="primary" fontSize="small" />
        )}
      </Grid>
      <Grid container xs={12} className={`${open ? classes.show : classes.hide} ${classes.root}`}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Accordion;
