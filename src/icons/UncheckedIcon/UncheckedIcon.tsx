import React from 'react';
import { SvgIcon as MuiSvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 20,
    height: 20,
    '&>path': {
        //@ts-ignore
      stroke: ({ alert }: any) => (alert ? theme.palette.error.main : theme.palette.secondary.main),
      '&:hover': {
          //@ts-ignore
        stroke: theme.palette.primary.main,
        fill: '#F5F8FF',
      },
    }
    
  },
}));

const UnCheckedIcon = ({ alert }: any) => {
  const classes = useStyles({ alert });
  const styles = {
    border: '1px solid gray',
  };
  return (
    <MuiSvgIcon
      className={classes.root}
      viewBox="0 0 20 20"
      style={{
        margin: 'auto',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 3.79086 1.79086 2 4 2H12C14.2091 2 16 3.79086 16 6V14C16 16.2091 14.2091 18 12 18H4C1.79086 18 0 16.2091 0 14V6Z"
        fill="white"
        stroke="grey"
        strokeWidth="1px"
        transform="translate(1 0)"
        style={styles}
      />
    </MuiSvgIcon>
  );
};

export default UnCheckedIcon;
